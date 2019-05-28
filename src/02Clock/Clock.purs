module Clock where

import Prelude
import Data.Array
import Control.Monad.Reader.Trans (runReaderT, ask, ReaderT)
import Data.JSDate (getHours, getMinutes, getSeconds, now)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect, foreachE)
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
  => MonadEffect m
  => String
  -> ReaderT ParentNode m (Maybe Element)
getElement className = do
  p <- ask
  EffectClass.liftEffect $
    WebPNode.querySelector (QuerySelector className) p

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
  clockHands <- flip runReaderT parentNode $ do
    secHand <- getElement ".second-hand"
    hrHand <- getElement ".hour-hand"
    minHand <- getElement ".min-hand"
    pure { secondHand: secHand, hourHand: hrHand, minuteHand: minHand }
  case clockHands.secondHand of
    Nothing -> pure unit
    Just secondHand ->
      case clockHands.hourHand of
        Nothing -> pure unit
        Just hourHand ->
          case clockHands.minuteHand of
            Nothing -> pure unit
            Just minuteHand -> do
              void $ setInterval 1000
                (setDate (ClockHands { secondHand: secondHand
                                     , minuteHand: minuteHand
                                     , hourHand: hourHand
                                     }))
