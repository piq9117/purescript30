module Clock where

import Prelude

import Control.Monad.Reader.Trans (class MonadAsk, runReaderT, ask)
import Data.JSDate (getHours, getMinutes, getSeconds, now)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect)
import Effect.Timer (setInterval)
import Effect.Uncurried (EffectFn2, runEffectFn2)
import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Console (logShow)

-- DOM
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

setDate :: ClockHands -> Effect Unit
setDate (ClockHands {secondHand, minuteHand, hourHand}) = do
  date <- now
  secs <- getSeconds date
  mins <- getMinutes date
  hours <- getHours date
  transform secondHand $ rotate secs 60.0
  transform minuteHand $ rotate mins 60.0
  transform hourHand $ rotate hours 12.0
  where rotate t num = "rotate(" <> show ( ((t / num) * 360.0) + 90.0 ) <> "deg)"

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
              void $ setInterval 1000 (setDate (ClockHands { secondHand: secondHand, minuteHand: minuteHand, hourHand: hourHand }))
