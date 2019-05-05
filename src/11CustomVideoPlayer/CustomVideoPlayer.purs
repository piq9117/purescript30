module CustomVideoPlayer where

-- Base
import Prelude
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Effect.Class (liftEffect, class MonadEffect)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect)
import Effect.Console (logShow)

-- DOM
import Web.HTML as HTML
import Web.HTML.Window as Window
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.DOM.Internal.Types (Element, Node)
import Web.Event.Internal.Types (Event, EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.DOM.NodeList as NodeList
import Web.HTML.HTMLDocument (HTMLDocument)
import Web.HTML.HTMLDocument as HTMLDocument
import Web.DOM.Element as Element
import Web.HTML.HTMLMediaElement (HTMLMediaElement)
import Web.HTML.HTMLMediaElement as HTMLMediaElement
import Web.HTML.Event.EventTypes as EventTypes
import Web.Event.Event as Event

class IsParentNode doc where
  toParentNode :: doc -> ParentNode

instance htmldocIsParentNode :: IsParentNode HTMLDocument where
  toParentNode = HTMLDocument.toParentNode

instance elementIsParentNode :: IsParentNode Element where
  toParentNode = Element.toParentNode

class IsHTMLMediaElement el where
  fromElement :: el -> Maybe HTMLMediaElement

instance elementHtmlMediaElement :: IsHTMLMediaElement Element where
  fromElement = HTMLMediaElement.fromElement

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

instance htmlMediaElementToEventTarget :: IsEventTarget HTMLMediaElement where
  toEventTarget = HTMLMediaElement.toEventTarget

instance elementToEventTarget :: IsEventTarget Element where
  toEventTarget = Element.toEventTarget

effParentNode :: Effect ParentNode
effParentNode =
 pure <<< toParentNode =<< Window.document =<< HTML.window

type ElementEnv =
  { parentNode :: ParentNode
  , targetElement :: String
  }

getElement
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT ElementEnv m (Maybe Element)
getElement = do
  { parentNode, targetElement } <- ask
  liftEffect $ ParentNode.querySelector (QuerySelector targetElement) parentNode

getAllElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT ElementEnv m (Array Node)
getAllElements = do
  { parentNode, targetElement } <- ask
  liftEffect $ NodeList.toArray =<< ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

tooglePlay
  :: HTMLMediaElement
  -> Event
  -> Effect Unit
tooglePlay target e = do
  isPaused <- HTMLMediaElement.paused target
  void $ if isPaused
            then HTMLMediaElement.play target
            else HTMLMediaElement.pause target

  -- case Event.target e of
  --   Nothing -> pure unit
  --   Just evtTarget ->
  --     case HTMLMediaElement.fromEventTarget evtTarget of
  --       Nothing -> pure unit
  --       Just video -> do
  --         isPaused <- HTMLMediaElement.paused video
  --         void $ if isPaused
  --                then HTMLMediaElement.play video
  --                else HTMLMediaElement.pause video

clickListener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> target
  -> Effect Unit
clickListener f e=
  EventTarget.eventListener f >>=
  \f' -> EventTarget.addEventListener EventTypes.click f' false (toEventTarget e)

main :: Effect Unit
main = do
  parentNode <- effParentNode
  mPlayer <- runReaderT getElement { parentNode: parentNode, targetElement: ".player" }
  case mPlayer of
    Nothing -> pure unit
    Just player -> do
      let pNode = { parentNode: toParentNode player, targetElement: "" }
      mVideo <- pure <<< join <<< liftA1 fromElement =<< runReaderT getElement (pNode { targetElement = ".viewer" })
      mToggle <- runReaderT getElement (pNode {targetElement = ".toggle"})
      mProgress <- runReaderT getElement (pNode { targetElement = ".progress" })
      mProgressBar <- runReaderT getElement (pNode { targetElement = ".progress_filled" })
      skipButtons <- runReaderT getAllElements (pNode { targetElement = "[data-skip]" })
      ranges <- runReaderT getAllElements (pNode { targetElement = ".player__slider" })
      case mVideo of
        Nothing -> pure unit
        Just video -> do
          case mToggle of
            Nothing -> do
              pure unit
            Just toggle -> do
              clickListener (tooglePlay video) video
              clickListener (tooglePlay video) toggle
