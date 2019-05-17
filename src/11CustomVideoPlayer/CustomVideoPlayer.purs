module CustomVideoPlayer where

-- Base
import Prelude
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Effect.Class (liftEffect, class MonadEffect)
import Data.Maybe (Maybe(..))
import Data.Float.Parse (parseFloat)

-- Effect
import Effect (Effect, foreachE)
import Effect.Uncurried (EffectFn2, runEffectFn2)
import Effect.Console (logShow)
import Effect.Ref (Ref)
import Effect.Ref as Ref

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
import Web.HTML.Event.EventTypes as EventType
import Web.Event.Event as Event
import Web.Event.Event (EventType(..))
import Web.DOM.Node as Node
import Web.UIEvent.MouseEvent.EventTypes as MouseEventType
import Web.HTML.HTMLElement as HTMLElement

foreign import data Dataset :: Type

foreign import dataset :: EventTarget -> Dataset

foreign import skipData :: Dataset -> String

foreign import targetValue :: EventTarget -> String

foreign import targetName :: EventTarget -> String

foreign import setVideoVolumeImpl :: EffectFn2 HTMLMediaElement Number Unit

foreign import setVideoPlaybackImpl :: EffectFn2 HTMLMediaElement Number Unit

foreign import setFlexBasisImpl :: EffectFn2 EventTarget String Unit

foreign import offsetX :: Event -> Number

setFlexBasis :: EventTarget -> Number -> Effect Unit
setFlexBasis evt val = runEffectFn2 setFlexBasisImpl evt ((show val) <> "%")

setVideoVolume :: HTMLMediaElement -> Number -> Effect Unit
setVideoVolume = runEffectFn2 setVideoVolumeImpl

setVideoPlayback :: HTMLMediaElement -> Number -> Effect Unit
setVideoPlayback = runEffectFn2 setVideoPlaybackImpl

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

instance nodeEventTarget :: IsEventTarget Node where
  toEventTarget = Node.toEventTarget

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
  liftEffect $ NodeList.toArray =<<
    ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

tooglePlay
  :: HTMLMediaElement
  -> Event
  -> Effect Unit
tooglePlay target e = do
  isPaused <- HTMLMediaElement.paused target
  void $ if isPaused
         then HTMLMediaElement.play target
         else HTMLMediaElement.pause target

updateButton
  :: Element
  -> Event
  -> Effect Unit
updateButton el e = do
  case Event.target e of
    Nothing -> pure unit
    Just t ->
      case HTMLMediaElement.fromEventTarget t of
        Nothing -> pure unit
        Just medElement -> do
          isPaused <- HTMLMediaElement.paused medElement
          void $ if isPaused
                 then Node.setTextContent "►" (Element.toNode el)
                 else Node.setTextContent "❚ ❚" (Element.toNode el)

skipListener
  :: HTMLMediaElement
  -> Event
  -> Effect Unit
skipListener video e =
  case Event.target e of
    Nothing -> pure unit
    Just target ->
      case parseFloat $ skipData $ dataset target of
        Nothing -> pure unit
        Just n -> do
          currentTime <- HTMLMediaElement.currentTime video
          HTMLMediaElement.setCurrentTime (currentTime + n) video

-- TODO: refactor handleVolumeUpdate and handlePlaybackUpdate into one function.
handleVolumeUpdate
  :: HTMLMediaElement
  -> Event
  -> Effect Unit
handleVolumeUpdate video e =
  case Event.target e of
    Nothing -> pure unit
    Just target -> do
      case parseFloat $ targetValue target of
        Nothing -> pure unit
        Just val -> do
          setVideoVolume video (if val > 1.0 then 1.0 else val)

handlePlaybackUpdate
  :: HTMLMediaElement
  -> Event
  -> Effect Unit
handlePlaybackUpdate video e =
  case Event.target e of
    Nothing -> pure unit
    Just target -> do
      case parseFloat $ targetValue target of
        Nothing -> pure unit
        Just val -> do
          setVideoPlayback video val

handleProgress
  :: HTMLMediaElement
  -> Element
  -> Effect Unit
handleProgress video progressBar = do
  currentTime <- HTMLMediaElement.currentTime video
  duration <- HTMLMediaElement.duration video
  setFlexBasis (toEventTarget progressBar) ((currentTime / duration) * 100.0)

handleScrub
  :: HTMLMediaElement
  -> Element
  -> Ref Boolean
  -> Event
  -> Effect Unit
handleScrub video progress isMouseDownRef e =
  case Event.target e of
    Nothing -> pure unit
    Just target -> do
      isMouseDown <- Ref.read isMouseDownRef
      mHtmlElement <- pure $ HTMLElement.fromElement progress
      case mHtmlElement of
        Nothing -> pure unit
        Just progressEl -> do
          case isMouseDown of
            true -> do
                duration <- HTMLMediaElement.duration video
                offsetWidth <- HTMLElement.offsetWidth progressEl
                HTMLMediaElement.setCurrentTime
                  ((offsetX e) / offsetWidth * duration)
                  video
            false -> pure unit

setMouseDownToFalse :: Ref Boolean -> Effect Unit
setMouseDownToFalse isMouseDownRef =
  Ref.modify_ (const false) isMouseDownRef

setMouseDownToTrue :: Ref Boolean -> Effect Unit
setMouseDownToTrue isMouseDownRef =
  Ref.modify_ (const true) isMouseDownRef

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
  mPlayer <- runReaderT getElement { parentNode: parentNode, targetElement: ".player" }
  isMouseDownRef <- Ref.new false
  case mPlayer of
    Nothing -> pure unit
    Just player -> do
      let pNode = { parentNode: toParentNode player, targetElement: "" }
      mVideo <- pure <<< join <<< liftA1 fromElement =<< runReaderT getElement (pNode { targetElement = ".viewer" })
      mToggle <- runReaderT getElement (pNode {targetElement = ".toggle"})
      mProgress <- runReaderT getElement (pNode { targetElement = ".progress" })
      mProgressBar <- runReaderT getElement (pNode { targetElement = ".progress__filled" })
      skipButtons <- runReaderT getAllElements (pNode { targetElement = "[data-skip]" })
      mVolume <- runReaderT getElement (pNode {targetElement = ".volume"})
      mPlayback <- runReaderT getElement (pNode {targetElement = ".playback"})
      case mProgress of
        Nothing -> pure unit
        Just progress -> do
          case mProgressBar of
            Nothing -> pure unit
            Just progressBar ->
            case mPlayback of
              Nothing -> pure unit
              Just playback ->
                case mVolume of
                  Nothing -> pure unit
                  Just volume ->
                    case mVideo of
                      Nothing -> pure unit
                      Just video -> do
                        case mToggle of
                          Nothing -> pure unit
                          Just toggle -> do
                            listener (tooglePlay video) EventType.click video
                            listener (tooglePlay video) EventType.click toggle
                            listener (updateButton toggle) (EventType "play") video
                            listener (updateButton toggle) (EventType "pause") video
                            foreachE skipButtons (listener (skipListener video) EventType.click)
                            listener (handleVolumeUpdate video) MouseEventType.mousedown volume
                            listener (handleVolumeUpdate video) EventType.change volume
                            listener (handlePlaybackUpdate video) MouseEventType.mousedown playback
                            listener (handlePlaybackUpdate video) EventType.change playback
                            listener (const $ handleProgress video progressBar) (EventType "timeupdate") video
                            listener (handleScrub video progress isMouseDownRef) EventType.click progress
                            listener (handleScrub video progress isMouseDownRef) MouseEventType.mousemove progress
                            listener (const $ setMouseDownToTrue isMouseDownRef) MouseEventType.mousedown progress
                            listener (const $ setMouseDownToFalse isMouseDownRef) MouseEventType.mouseup progress
