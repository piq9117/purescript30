module KonamiCode where

import Prelude
import Data.Array (drop, snoc)
import Data.String as String
import Data.String.Utils (includes, fromCharArray)
import Data.Foldable (length)

-- Effect
import Effect.Ref (Ref)
import Effect.Ref as Ref
import Effect (Effect)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Uncurried (EffectFn1, runEffectFn1)

-- DOM
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.Event.Internal.Types (EventTarget, Event)
import Web.HTML (window, Window)
import Web.HTML.Window as Window
import Web.Event.Event (EventType)
import Web.UIEvent.KeyboardEvent.EventTypes (keyup)

foreign import getKey :: Event -> String
foreign import cornifyAddImpl :: EffectFn1 Unit Unit

-- external js function from cornify.com/js/cornify.sj
cornifyAdd :: Unit -> Effect Unit
cornifyAdd = runEffectFn1 cornifyAddImpl

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

instance windowToEventTarget :: IsEventTarget Window where
  toEventTarget = Window.toEventTarget

secretKeyword :: String
secretKeyword = "wesbos"

listener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> EventType
  -> target
  -> Effect Unit
listener f evtType target =
  flip (flip (addEventListener evtType) false) (toEventTarget target) =<< eventListener f

listenerCb
  :: forall m. MonadEffect m
  => Ref (Array String)
  -> Event
  -> m Unit
listenerCb refArray e = do
  liftEffect $ Ref.modify_ (flip snoc (getKey e)) refArray
  liftEffect $ Ref.modify_ (drop =<< (flip (-)) (String.length secretKeyword) <<< length) refArray
  arr <- liftEffect $ Ref.read refArray
  if includes secretKeyword (fromCharArray arr)
     then liftEffect $ cornifyAdd unit
     else pure unit

main :: Effect Unit
main = do
  w <- window
  refArray <- Ref.new []
  listener (listenerCb refArray) keyup w
