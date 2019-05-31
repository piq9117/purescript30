module CSSVariables where

-- Base
import Prelude

import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect)
import Effect as Effect
import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Uncurried (EffectFn3, runEffectFn3)

-- DOM
import Web.DOM.Document (Document)
import Web.DOM.Document as Document
import Web.DOM.Internal.Types (NodeList, Element)
import Web.DOM.Node as DOMNode
import Web.DOM.Node (Node)
import Web.DOM.NodeList as NodeList
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.Event.Event as Event
import Web.Event.EventTarget (EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.HTML as HTML
import Web.HTML.Event.EventTypes as EventType
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.HTMLDocument (HTMLDocument)
import Web.HTML.Window as Window
import Web.UIEvent.MouseEvent.EventTypes as MouseEventType
import Web.Event.Internal.Types (Event)
import Web.Event.Event (EventType)

foreign import data Dataset :: Type
foreign import dataset :: EventTarget -> Dataset
foreign import sizing :: Dataset -> String
foreign import name :: EventTarget -> String
foreign import setPropertyImpl :: forall a. EffectFn3 Element String a Unit
foreign import value :: EventTarget -> String

class IsParentNode doc where
  toParentNode :: doc -> ParentNode

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

class IsDocument d where
  toDocument :: d -> Document

instance domNodeToEventTarget :: IsEventTarget Node where
  toEventTarget = DOMNode.toEventTarget

instance htmlDocToParentNode :: IsParentNode HTMLDocument where
  toParentNode = HTMLDocument.toParentNode

instance htmlDocToDocument :: IsDocument HTMLDocument where
  toDocument = HTMLDocument.toDocument

setProperty :: forall a. Element -> String -> a -> Effect Unit
setProperty props el val = runEffectFn3 setPropertyImpl props el val

getElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, className :: String } m NodeList
getElements = do
  {parentNode, className} <- ask
  EffectClass.liftEffect $ ParentNode.querySelectorAll (QuerySelector className) parentNode

effParentNode :: Effect { parentNode :: ParentNode, document :: Document }
effParentNode = do
  w <- HTML.window
  doc <- Window.document w
  pure $ { parentNode: toParentNode doc
         , document: toDocument doc
         }

handleUpdate
  :: Document
  -> Event
  -> Effect Unit
handleUpdate doc target = do
  mEventTarget <- pure $ Event.target target
  case mEventTarget of
    Nothing -> pure unit
    Just evtTarget -> do
      mDocElement <- Document.documentElement doc
      case mDocElement of
        Nothing -> pure unit
        Just docElement -> do
          setProperty docElement
            ("--" <> name evtTarget)
            (value evtTarget <> (sizing <<< dataset $ evtTarget))

listener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> EventType
  -> target
  -> Effect Unit
listener f evtType e =
  EventTarget.eventListener f >>=
  \f' -> EventTarget.addEventListener evtType f' false (toEventTarget e)

main :: Effect Unit
main = do
  { parentNode, document } <- effParentNode
  els <- runReaderT getElements { className: ".controls input", parentNode: parentNode }
  nodeArr <- NodeList.toArray els
  Effect.foreachE
    nodeArr
    (\a -> do
        listener (handleUpdate document) EventType.change a
        listener (handleUpdate document) MouseEventType.mousemove a
    )
