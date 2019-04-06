module Drumkit where

import Prelude (class Bind, Unit, bind, discard, pure, show, void, ($), (<<<), (<>), (=<<), (/=))
import Web.Event.EventTarget (EventListener)
import Web.Event.EventTarget as EvtTarget
import Web.Event.Event (EventType(..), Event)
import Web.Event.Event as WebEvent
import Web.HTML as Web
import Web.HTML.Window as Window
import Web.HTML.HTMLDocument as HTMLDoc
import Effect (Effect)
import Effect as E
import Effect.Console (logShow)
import Web.UIEvent.KeyboardEvent (KeyboardEvent)
import Web.UIEvent.KeyboardEvent as KbEvent
import Data.Maybe (Maybe(..))
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as WebPNode
import Web.DOM.Internal.Types (Element, NodeList)
import Web.HTML.HTMLMediaElement as MediaEl
import Control.Monad.Reader.Trans
import Effect.Class (class MonadEffect)
import Effect.Class as EffClass
import Web.HTML.HTMLElement as HTMLElement
import Web.DOM.DOMTokenList as DOMTokenList
import Web.DOM.Node as DOMNode
import Control.Monad (class Monad)
import Web.DOM.NodeList as NodeList
import Web.DOM.Element as WebElement

foreign import keyCode :: KeyboardEvent -> Int
foreign import propertyName :: Event -> String

docNode :: Effect ParentNode
docNode = do
  w <- Web.window
  doc <- Window.document w
  pure $ HTMLDoc.toParentNode doc

-- TODO: find common function with getKeyEl
getAudioEl
  :: forall m. Bind m
  => MonadAsk ParentNode m
  => MonadEffect m
  => String
  -> m (Maybe Element)
getAudioEl kcode = do
  p <- ask
  mElement <- EffClass.liftEffect $ WebPNode.querySelector (QuerySelector $ "audio[data-key='" <> kcode <>"']") p
  pure mElement

  -- TODO: find common function with getAudioEl
getKeyEl
  :: forall m. Bind m
  => MonadAsk ParentNode m
  => MonadEffect m
  => String
  -> m (Maybe Element)
getKeyEl kcode = do
  p <- ask
  mElement <- EffClass.liftEffect $ WebPNode.querySelector (QuerySelector $ ".key[data-key='"<> kcode <>"']") p
  pure mElement

getAllKeys
  :: forall m. Bind m
  => Monad m
  => MonadAsk ParentNode m
  => MonadEffect m
  => m NodeList
getAllKeys =
  EffClass.liftEffect <<< WebPNode.querySelectorAll (QuerySelector ".key") =<< ask

evtListener :: ParentNode -> Effect EventListener
evtListener p = EvtTarget.eventListener $ \e -> void do
  mKeyboardEvnt <- pure $ KbEvent.fromEvent e
  case mKeyboardEvnt of
    Just keyboardEvnt -> do
      mAudio <- runReaderT (getAudioEl <<< show <<< keyCode $ keyboardEvnt) p
      case mAudio of
        Just audioElement ->
          case MediaEl.fromElement audioElement of
            Just audio -> do
              MediaEl.setCurrentTime 0.0 audio
              MediaEl.play audio
              mKeyCode <- runReaderT (getKeyEl <<< show <<< keyCode $ keyboardEvnt) p
              case mKeyCode of
                Just k ->
                  case HTMLElement.fromElement k of
                    Just htmlElement -> do
                      domTokenList <- HTMLElement.classList htmlElement
                      DOMTokenList.add domTokenList "playing"
                    Nothing -> logShow "No HTML element."
                Nothing -> logShow "No Keycode found"
            Nothing -> logShow "No audio."
        Nothing -> logShow "No audio element."
    Nothing -> logShow "No Keycode found"

removeTransition :: Effect EventListener
removeTransition = EvtTarget.eventListener $ \e -> void
  if propertyName e /= "transform"
  then logShow "Otin"
  else do
    mEventTarget <- pure $ WebEvent.target e
    case mEventTarget of
      Just eventTarget -> do
        mElement <- pure $ WebElement.fromEventTarget eventTarget
        case mElement of
          Just element -> do
            mHtmlElement <- pure $ HTMLElement.fromElement element
            case mHtmlElement of
              Just htmlElement -> do
                domTokenList <- HTMLElement.classList htmlElement
                DOMTokenList.remove domTokenList "playing"
              Nothing -> logShow "No HTML Element found."
          Nothing -> logShow "No Element found."
      Nothing -> logShow "No Event found."

main :: Effect Unit
main = do
  w <- Web.window
  p <- docNode
  evt <- evtListener p
  removeTrans <- removeTransition
  nList <- runReaderT getAllKeys p
  nodes <- NodeList.toArray nList
  E.foreachE
    nodes
    (\key -> EvtTarget.addEventListener (EventType "transitionend") removeTrans false (DOMNode.toEventTarget key))
  EvtTarget.addEventListener (EventType "keydown") evt false (Window.toEventTarget w)
