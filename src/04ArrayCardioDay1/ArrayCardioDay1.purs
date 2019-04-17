module ArrayCardioDay1 where

-- Base
import Control.Monad.Reader(ReaderT, ask, runReaderT)
import Data.Array (filter, sortBy, (!!))
import Data.Maybe (Maybe(..))
import Data.String.Common (split)
import Data.String.Pattern (Pattern(..))
import Data.Traversable (foldr, traverse)
import Prelude
import Data.String.Utils as StringUtils
import Data.Map (Map)
import Data.Map as Map

-- Effect
import Effect (Effect)
import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Console (logShow)
import Effect.Uncurried (EffectFn1, runEffectFn1)

-- DOM
import Web.DOM.Internal.Types (Element, NodeList)
import Web.DOM.Node as Node
import Web.DOM.NodeList as NodeList
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as ParentNode
import Web.HTML as HTML
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.Window as Window

-- test data
import ExerciseData (Inventor, ranData, people, inventorList)

foreign import logTableImpl :: forall a. EffectFn1 a Unit

logTable :: forall a. a -> Effect Unit
logTable a = runEffectFn1 logTableImpl a

effParentNode ::  Effect ParentNode
effParentNode =
  HTML.window >>= Window.document >>= pure <<< HTMLDocument.toParentNode

-- Notes: toParentNode :: Element -> ParentNode
getElement
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String } m (Maybe Element)
getElement = do
  { parentNode, targetElement } <- ask
  pure =<< EffectClass.liftEffect $ ParentNode.querySelector (QuerySelector targetElement) parentNode

getElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String } m NodeList
getElements = do
  { parentNode, targetElement } <- ask
  pure =<< EffectClass.liftEffect $ ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

bornBy1500 :: Array Inventor -> Array Inventor
bornBy1500 = filter (isBortBetween  1500 1600)
  where isBortBetween startDate endDate inventor =
          inventor.year >= startDate && inventor.year <= endDate

fullNames :: Array Inventor -> Array String
fullNames = map (\inv -> inv.first <> " " <> inv.last)

orderedByYear :: Array Inventor -> Array Inventor
orderedByYear = sortBy (\a b -> compare a.year b.year)

totalYears :: Array Inventor -> Int
totalYears = foldr (\b a -> a + (b.passed - b.year)) 0

orderedByOldest :: Array Inventor -> Array Inventor
orderedByOldest =
  sortBy (\a b ->
           if (a.passed - a.year) > (b.passed - b.year)
           then LT
           else GT)

alpha :: Array String -> Array String
alpha =
  sortBy (\a b ->
           case (split (Pattern ", ") a) !! 0 of
             Nothing -> LT
             Just aLast ->
               case (split (Pattern ", ") b) !! 0 of
                 Nothing -> LT
                 Just bLast -> compare aLast bLast
         )

transportation :: Array String -> Map String Int
transportation = foldr (\a b -> Map.insertWith (\n _ -> n + 1) a 1 b) Map.empty

main :: Effect Unit
main = do
  parentNode <- effParentNode
  aTags <- runReaderT getElements {parentNode: parentNode, targetElement: "a"}
  logTable $ bornBy1500 inventorList
  logShow $ fullNames inventorList
  logTable $ orderedByYear inventorList
  logShow $ totalYears inventorList
  logTable $ orderedByOldest inventorList
  nodeArray <- NodeList.toArray aTags
  txtContent <- traverse Node.textContent nodeArray
  logShow $ filter (StringUtils.includes "de") txtContent
  logShow $ alpha people
  logShow $ transportation ranData
