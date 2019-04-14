module Clock where

import Control.Monad.Reader.Trans
import Data.Array
import Data.JSDate
import Data.Maybe
import Effect
import Effect.Class
import Effect.Timer
import Effect.Uncurried
import Prelude

import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Console (logShow)
import Web.DOM.Internal.Types (Element)
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as WebPNode
import Web.HTML as Web
import Web.HTML.HTMLDocument as HTMLDoc
import Web.HTML.Window as Window

foreign import transformImpl :: EffectFn2 Element String Unit

transform :: Element -> String -> Effect Unit
transform el str = runEffectFn2 transformImpl el str

docNode :: Effect ParentNode
docNode = do
  w <- Web.window
  doc <- Window.document w
  pure $ HTMLDoc.toParentNode doc

getElement
  :: forall m. Bind m
  => MonadAsk ParentNode m
  => MonadEffect m
  => String
  -> m (Maybe Element)
getElement className = do
  p <- ask
  mElement <-
    EffectClass.liftEffect $
    WebPNode.querySelector (QuerySelector className) p
  pure mElement

data ClockHands = ClockHands
  { secondHand :: Element
  , minuteHand :: Element
  , hourHand :: Element
  }

setDate
  :: forall m. Bind m
  => MonadAsk ClockHands m
  => MonadEffect m
  => m (Effect Unit)
setDate = do
  (ClockHands { secondHand, minuteHand, hourHand }) <- ask
  dt <- EffectClass.liftEffect now
  secs <- EffectClass.liftEffect $ getSeconds dt
  pure $ transform secondHand ("rotate(" <> show ( ((secs / 60.0) * 360.0) + 90.0 ) <> "deg)")

main :: Effect Unit
main = do
  parentNode <- docNode
  mSecondHand <- runReaderT (getElement ".second-hand") parentNode
  mMinuteHand <- runReaderT (getElement ".hour-hand") parentNode
  mHourHand <- runReaderT (getElement ".min-hand") parentNode
  case mSecondHand of
    Nothing -> logShow "Nothing"
    Just secondHand ->
      case mMinuteHand of
        Nothing -> logShow "Nothing"
        Just minuteHand ->
          case mHourHand of
            Nothing -> logShow "Nothing"
            Just hourHand -> do
              sDate <- runReaderT setDate (ClockHands { secondHand: secondHand, minuteHand: minuteHand, hourHand: hourHand })
              void $ setInterval 1000 sDate
