module SlideInOnScroll where

-- Main
import Prelude
import Control.Monad.Reader.Trans
import Unsafe.Coerce (unsafeCoerce)
import Data.Int (toNumber)

-- Date
import Data.Time.Duration (Milliseconds(..))

-- Event
import FRP.Event as FRP
import FRP.Event.Time as FRPT

-- Effect
import Effect (Effect, foreachE)
import Debug.Trace
import Effect.Class (liftEffect, class MonadEffect)
import Effect.Uncurried (EffectFn1, runEffectFn1)

-- DOM
import Web.HTML (window)
import Web.DOM.ParentNode (ParentNode, querySelectorAll, QuerySelector(..))
import Web.HTML.HTMLDocument (HTMLDocument)
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.Window (Window)
import Web.HTML.Window as Window
import Web.DOM.Internal.Types (Node)
import Web.Event.Internal.Types (EventTarget, Event)
import Web.DOM.NodeList (toArray)
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.Event.Event (EventType(..))
import Web.HTML.HTMLElement (HTMLElement, offsetTop, classList)
import Web.DOM.DOMTokenList (add, remove)
import Web.DOM.Node as Node

foreign import nodeHeightImpl :: EffectFn1 Node Int

nodeHeight :: Node -> Effect Int
nodeHeight = runEffectFn1 nodeHeightImpl

class IsParentNode p where
  toParentNode :: p -> ParentNode

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

class IsHTMLElement e where
  toHtmlElement :: e -> HTMLElement

instance nodeToHtmlElement :: IsHTMLElement Node where
  toHtmlElement = unsafeCoerce

instance htmlDocToParentNode :: IsParentNode HTMLDocument where
  toParentNode = HTMLDocument.toParentNode

instance nodeToEventTarget :: IsEventTarget Node where
  toEventTarget = Node.toEventTarget

instance windowToEventTarget :: IsEventTarget Window  where
  toEventTarget = Window.toEventTarget

type ElementsEnv =
  { key :: String
  , parentNode :: ParentNode
  }

getAllElements
  :: forall m. Bind m
  => MonadAsk ElementsEnv m
  => MonadEffect m
  => m (Array Node)
getAllElements = do
  { key, parentNode } <- ask
  liftEffect $ toArray =<< querySelectorAll (QuerySelector key) parentNode

parentNode :: Effect ParentNode
parentNode =
 pure <<< toParentNode =<< Window.document =<< window

listener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> EventType
  -> target
  -> Effect Unit
listener f evtType e =
  flip (flip (addEventListener evtType) false) (toEventTarget e) =<< eventListener f

checkSlides :: Window -> Array Node -> Effect Unit
checkSlides w nodes =
  foreachE nodes $ \node -> do
    nHeight <- nodeHeight node
    scroll <- Window.scrollY w
    inHeight <- Window.innerHeight w
    slideIntAt <- pure $ (scroll + inHeight) - nHeight / 2
    sliderOffset <- offsetTop (toHtmlElement node)
    imageBottom <- pure $ sliderOffset + (toNumber nHeight) 
    isHalfShown <- pure $ toNumber slideIntAt > sliderOffset
    isNotScrolledPast <- pure $ (toNumber scroll) < imageBottom
    sliderImageClassList <- classList (toHtmlElement node)
    if isHalfShown && isNotScrolledPast
      then add  sliderImageClassList "active"
      else remove sliderImageClassList "acitive"

main :: Effect Unit
main = do
  w <- window
  pNode <- parentNode
  nodes <- runReaderT getAllElements { key: ".slide-in", parentNode: pNode }
  listener (const $ checkSlides w nodes) (EventType "scroll") w

