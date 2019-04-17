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
import Effect.Console (logShow)
import Effect.Uncurried (EffectFn3, runEffectFn3)

-- DOM
import Web.DOM.Document (Document)
import Web.DOM.Document as Document
import Web.DOM.Internal.Types (NodeList, Element)
import Web.DOM.Node as DOMNode
import Web.DOM.NodeList as NodeList
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.Event.Event as Event
import Web.Event.EventTarget (EventListener, EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.HTML as HTML
import Web.HTML.Event.EventTypes as EventTypes
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.Window as Window
import Web.UIEvent.MouseEvent.EventTypes as MouseEventTypes

foreign import data Dataset :: Type
foreign import dataset :: EventTarget -> Dataset
foreign import sizing :: Dataset -> String
foreign import name :: EventTarget -> String
foreign import setPropertyImpl :: forall a. EffectFn3 Element String a Unit
foreign import value :: EventTarget -> String

setProperty :: forall a. Element -> String -> a -> Effect Unit
setProperty props el val = runEffectFn3 setPropertyImpl props el val

getElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, className :: String } m NodeList
getElements = do
  {parentNode, className} <- ask
  elements <- EffectClass.liftEffect $ ParentNode.querySelectorAll (QuerySelector className) parentNode
  pure elements

effParentNode :: Effect { parentNode :: ParentNode, document :: Document }
effParentNode = do
  w <- HTML.window
  doc <- Window.document w
  pure $ { parentNode: HTMLDocument.toParentNode doc
         , document: HTMLDocument.toDocument doc
         }

effHandleUpdate :: Document -> Effect EventListener
effHandleUpdate doc = EventTarget.eventListener $ \e -> void do
  mEventTarget <- pure $ Event.target e
  case mEventTarget of
    Nothing -> logShow "No event target found."
    Just evtTarget ->  do
      mDocElement <- Document.documentElement doc
      case mDocElement of
        Nothing -> logShow "No event target found."
        Just docElement -> do
          setProperty docElement
            ("--" <> name evtTarget)
            (value evtTarget <> (sizing <<< dataset $ evtTarget))

main :: Effect Unit
main = do
  { parentNode, document } <- effParentNode
  els <- runReaderT getElements { className: ".controls input", parentNode: parentNode }
  handleUpdate <- (effHandleUpdate document)
  nodeArr <- NodeList.toArray els
  Effect.foreachE
    nodeArr
    (\a -> do 
        evtListener a EventTypes.change handleUpdate 
        evtListener a MouseEventTypes.mousemove handleUpdate 
    )
  where 
    evtListener node event eListener = 
      EventTarget.addEventListener event eListener false (DOMNode.toEventTarget node)
