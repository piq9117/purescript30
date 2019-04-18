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
import Web.Event.EventTarget (EventListener)
import Web.Event.EventTarget as EventTarget
import Web.HTML.Event.EventTypes as EventTypes
import Web.HTML as HTML
import Web.HTML.Window as Window
import Web.HTML.HTMLDocument as HTMLDocument
import Web.DOM.NodeList as NodeList
import Web.DOM.Node as Node
import Web.HTML.HTMLElement as HTMLElement
-- import Web.UIEvent.MouseEvent as MouseEvent
import Web.Event.Event (EventType(..), Event)
import Web.Event.Event as WebEvent
import Web.DOM.DOMTokenList as DOMTokenList

foreign import propertyNameImpl :: Fn1 Event String

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
  pure =<< EffectClass.liftEffect $ ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

effToogleOpen :: Effect EventListener
effToogleOpen = EventTarget.eventListener $ \e -> void do
  case WebEvent.target e of
    Nothing -> logShow "No target found."
    Just target ->
      case HTMLElement.fromEventTarget target of
        Nothing -> logShow "No event target found."
        Just evtTarget -> do
          domList <- HTMLElement.classList evtTarget
          void $ DOMTokenList.toggle domList "open"

effToggleActive :: Effect EventListener
effToggleActive = EventTarget.eventListener $ \e -> void do
  case WebEvent.target e of
    Nothing -> logShow "No target found."
    Just target ->
      case HTMLElement.fromEventTarget target of
        Nothing -> logShow "No event target found."
        Just evtTarget -> do
          domList <- HTMLElement.classList evtTarget
          void $ if StringUtils.includes "flex" $ propertyName e
                then void $ DOMTokenList.toggle domList "open-active"
                else pure unit

main :: Effect Unit
main = do
  parentNode <- effParentNode
  panelEls <- runReaderT getElements {parentNode: parentNode, targetElement: ".panel"}
  panelArr <- NodeList.toArray panelEls
  toggleOpen <- effToogleOpen
  toggleActive <- effToggleActive
  Effect.foreachE
    panelArr
    (\panel -> do
      EventTarget.addEventListener EventTypes.click toggleOpen false (Node.toEventTarget panel)
      EventTarget.addEventListener (EventType "transitionend") toggleActive false (Node.toEventTarget panel)
      )

