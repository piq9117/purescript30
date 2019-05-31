module FlexPanelGallery where

-- Base
import Prelude
import Control.Monad.Reader
import Data.Maybe(Maybe(..))
import Data.Function.Uncurried (Fn1, runFn1)
import Data.String.Utils as StringUtils

-- Effect
import Effect.Class as EffectClass
import Effect.Class (class MonadEffect)
import Effect (Effect)
import Effect as Effect
import Effect.Console (logShow)

-- DOM
import Web.DOM.Internal.Types (NodeList)
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as ParentNode
import Web.Event.EventTarget (EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.HTML.Event.EventTypes as EventType
import Web.HTML as HTML
import Web.HTML.Window as Window
import Web.HTML.HTMLDocument as HTMLDocument
import Web.DOM.NodeList as NodeList
import Web.DOM.Node as Node
import Web.HTML.HTMLElement as HTMLElement
import Web.Event.Event (EventType(..), Event)
import Web.Event.Event as WebEvent
import Web.DOM.DOMTokenList as DOMTokenList
import Web.DOM.Node (Node)

foreign import propertyNameImpl :: Fn1 Event String

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

instance nodeToEventTarget :: IsEventTarget Node where
  toEventTarget = Node.toEventTarget

propertyName :: Event -> String
propertyName = runFn1 propertyNameImpl

effParentNode :: Effect ParentNode
effParentNode =
  HTML.window >>= Window.document >>= pure <<< HTMLDocument.toParentNode

getElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String} m NodeList
getElements = do
  { parentNode, targetElement }<- ask
  EffectClass.liftEffect $ ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

toggleOpen :: Event -> Effect Unit
toggleOpen e =
  case WebEvent.target e of
    Nothing -> pure unit
    Just target ->
      case HTMLElement.fromEventTarget target of
        Nothing -> pure unit
        Just evtTarget -> do
          domList <- HTMLElement.classList evtTarget
          void $ DOMTokenList.toggle domList "open"

toggleActive :: Event -> Effect Unit
toggleActive e =
  case WebEvent.target e of
    Nothing -> pure unit
    Just target ->
      case HTMLElement.fromEventTarget target of
        Nothing -> pure unit
        Just evtTarget -> do
          domList <- HTMLElement.classList evtTarget
          void $ if StringUtils.includes "flex" $ propertyName e
                 then void $ DOMTokenList.toggle domList "open-active"
                 else pure unit

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
  parentNode <- effParentNode
  panelEls <- runReaderT getElements {parentNode: parentNode, targetElement: ".panel"}
  panelArr <- NodeList.toArray panelEls
  Effect.foreachE
    panelArr
    (\panel -> do
        listener toggleOpen EventType.click panel
        listener toggleActive (EventType "transitionend") panel
      )

