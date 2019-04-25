module DevToolsDomination where

-- Base
import Control.Monad.Reader
import Prelude

import Data.Maybe (Maybe(..))
import Effect (Effect, foreachE)
import Effect.Class (liftEffect, class MonadEffect)
import Effect.Console (logShow, log, warn, info, error, time, timeEnd)
import Effect.Uncurried (EffectFn2, runEffectFn2, EffectFn1, runEffectFn1)
import Unsafe.Coerce (unsafeCoerce)
import Web.DOM.DOMTokenList as DOMTokenList
import Web.DOM.Element as Element
import Web.DOM.Internal.Types (Element)
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.Event.Event as Event
import Web.Event.EventTarget (EventListener)
import Web.Event.EventTarget as EventTarget
import Web.Event.Internal.Types (EventTarget)
import Web.HTML as HTML
import Web.HTML.Event.EventTypes as EventTypes
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.HTMLElement (HTMLElement)
import Web.HTML.HTMLElement as HTMLElement
import Web.HTML.Window as Window
import Effect.Timer as Timer

foreign import setColorImpl :: EffectFn2 EventTarget String Unit
foreign import setFontSizeImpl :: EffectFn2 EventTarget String Unit
foreign import assertImpl :: EffectFn2 Boolean String Unit
foreign import toHTMLElement :: EventTarget -> HTMLElement
foreign import logClearImpl :: EffectFn1 Unit Unit
foreign import logDirImpl :: forall a. EffectFn1 a Unit
foreign import groupImpl :: forall a.  EffectFn1 a Unit
foreign import groupEndImpl :: forall a. EffectFn1 a Unit
foreign import logCountImpl :: forall a. EffectFn1 a Unit

logCount :: forall a. a -> Effect Unit
logCount = runEffectFn1 logCountImpl

logGroup :: forall a. a -> Effect Unit
logGroup = runEffectFn1 groupImpl

logGroupEnd :: forall a. a -> Effect Unit
logGroupEnd = runEffectFn1 groupEndImpl

logDir :: forall a. a -> Effect Unit
logDir = runEffectFn1 logDirImpl

unsafeLog :: forall a. a -> Effect Unit
unsafeLog = log <<< unsafeCoerce

logClear :: Unit -> Effect Unit
logClear = runEffectFn1 logClearImpl

assert :: Boolean -> String -> Effect Unit
assert = runEffectFn2 assertImpl

setColor :: EventTarget -> String -> Effect Unit
setColor = runEffectFn2 setColorImpl

setFontSize :: EventTarget -> String -> Effect Unit
setFontSize = runEffectFn2 setFontSizeImpl

effParentNode :: Effect ParentNode
effParentNode = do
  pure <<< HTMLDocument.toParentNode =<< Window.document =<< HTML.window

type Dog =
  { name :: String
  , age :: Int
  }

dogs :: Array Dog
dogs =
  [ { name: "Snickers", age: 2 }
  , { name: "hugo", age: 8 }
  ]

getElement
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String } m (Maybe Element)
getElement = do
  { parentNode, targetElement } <- ask
  pure =<< liftEffect $ ParentNode.querySelector (QuerySelector targetElement) parentNode

effMakeGreen :: Effect EventListener
effMakeGreen = EventTarget.eventListener $ \e -> void do
  case Event.target e of
    Nothing -> logShow "No event target"
    Just t -> do
      setColor t "#BADA55"
      setFontSize t "50px"
      domTokens <- HTMLElement.classList (toHTMLElement t)
      bool <- DOMTokenList.contains domTokens "ouch"
      assert bool "That is wrong"

main :: Effect Unit
main = do
  parentNode <- effParentNode
  makeGreen <- effMakeGreen
  mEl <- runReaderT getElement {parentNode: parentNode, targetElement : "#make-green"}
  case mEl of
    Nothing -> pure unit
    Just el -> do
      EventTarget.addEventListener EventTypes.click makeGreen false (Element.toEventTarget el)
      log "Hello"
      warn "OH NOOOO"
      error "Shit!"
      info "Crocodiles eat 3-4 people per year"
      assert (1 == 1) "That is wrong"
      unsafeLog el
      logDir el
      logClear unit
      foreachE dogs (\dog -> do
                        logGroup dog.name
                        log ("This is " <> dog.name)
                        log (dog.name <> " is " <> show dog.age)
                        log (dog.name <> " is " <> show (dog.age * 7))
                        logGroupEnd dog.name
                        )
      logCount "Wes"
      logCount "Wes"
      logCount "Steve"
      logCount "Steve"
      logCount "Wes"
      logCount "Steve"
      logCount "Steve"
      logCount "Steve"
      logCount "Steve"
      logCount "Steve"
      time "Timer"
      -- Got too lazy implementing fetch with Affjax
      void $ Timer.setTimeout 100 (timeEnd "Timer")
