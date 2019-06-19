module SlideInOnScroll where

-- Main
import Prelude
import Control.Monad.Reader.Trans

-- Effect
import Effect (Effect, foreachE)
import Debug.Trace
import Effect.Class (liftEffect, class MonadEffect)

-- DOM
import Web.HTML (window)
import Web.DOM.ParentNode (ParentNode, querySelectorAll, QuerySelector(..))
import Web.HTML.HTMLDocument (HTMLDocument)
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.Window (document, Window, innerHeight, scrollY)
import Web.DOM.Internal.Types (Node)
import Web.Event.Internal.Types (EventTarget, Event)
import Web.DOM.NodeList (toArray)
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.Event.Event (EventType)

foreign import nodeHeight :: Node -> Int

class IsParentNode p where
  toParentNode :: p -> ParentNode

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

instance htmlDocToParentNode :: IsParentNode HTMLDocument where
  toParentNode = HTMLDocument.toParentNode

getAllElements
  :: forall m. Bind m
  => MonadAsk { key :: String, parentNode :: ParentNode } m
  => MonadEffect m
  => m (Array Node)
getAllElements = do
  { key, parentNode } <- ask
  liftEffect $ toArray =<< querySelectorAll (QuerySelector key) parentNode

parentNode :: Effect ParentNode
parentNode =
 pure <<< toParentNode =<< document =<< window

listener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> EventType
  -> target
  -> Effect Unit
listener f evtType e =
  flip (flip (addEventListener evtType) false) (toEventTarget e) =<< eventListener f

checkSlides :: Window -> Node -> Effect Unit
checkSlides window node = do
  nHeight <- pure $ nodeHeight node
  scroll <- scrollY window
  inHeight <- innerHeight window
  void $ pure $ (scroll + inHeight) - nodeHeight node / 2

main :: Effect Unit
main = do
  w <- window
  pNode <- parentNode
  nodes <- runReaderT getAllElements { key: ".slide-in", parentNode: pNode }
  foreachE nodes (checkSlides w)
