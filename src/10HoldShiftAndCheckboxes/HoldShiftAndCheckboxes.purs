module HoldShiftAndCheckboxes where

-- Base
import Control.Monad.State.Class
import Data.Tuple
import Prelude

import Control.Monad.Reader (ReaderT, ask, runReaderT, class MonadAsk)
import Control.Monad.State (StateT, get, runStateT, runState)
import Data.Maybe (Maybe(..))
import Effect (Effect, foreachE)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Console (logShow)
import Unsafe.Coerce (unsafeCoerce)
import Web.DOM.Internal.Types (NodeList, Node)
import Web.DOM.Node as Node
import Web.DOM.NodeList as NodeList
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.Event.Event as Event
import Web.Event.EventTarget (EventListener, EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.Event.Internal.Types (Event)
import Web.HTML as HTML
import Web.HTML.Event.EventTypes as EventTypes
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.HTMLInputElement (HTMLInputElement)
import Web.HTML.HTMLInputElement as HTMLInputElement
import Web.HTML.Window as Window
import Web.UIEvent.MouseEvent (MouseEvent)
import Web.UIEvent.MouseEvent as MouseEvent

foreign import eqEventTargetImpl :: EventTarget -> EventTarget -> Boolean

effParentNode :: Effect ParentNode
effParentNode =
  pure <<< HTMLDocument.toParentNode =<< Window.document =<< HTML.window

eventToMouseEvent :: Event -> MouseEvent
eventToMouseEvent = unsafeCoerce

eventToHtmlInputElement :: EventTarget -> HTMLInputElement
eventToHtmlInputElement = unsafeCoerce

getAllElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String } m NodeList
getAllElements = do
  { parentNode, targetElement } <- ask
  liftEffect $ ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

-- newtype wrapper created for EventTarget so I can create an Eq instance
-- without creating an orphan instance.
newtype Target = Target EventTarget

instance eventTargetEq :: Eq Target where
  eq (Target evt1) (Target evt2) = eqEventTargetImpl evt1 evt2

type HandleCheckEnv =
  { isInBetween :: Boolean
  , nodes :: Array Node
  }

type IterNodesEnv =
  { eventTarget :: EventTarget
  , nodes :: Array Node
  , isChecked :: Boolean
  , isShiftKey :: Boolean
  }

-- iterNodes'
--   :: forall m. Monad m
--   => MonadEffect m
--   => ReaderT IterNodesEnv m Unit
--   -> StateT Boolean m Unit
  -- -> Array Node
  -- -> Boolean
  -- -> Boolean
  -- -> StateT Boolean m Unit
-- iterNodes' evtTarget nodes isChecked isShiftKey = do
iterNode'
  :: forall m. Monad m
  => MonadEffect m
  => MonadState Boolean m
  => ReaderT IterNodesEnv m Unit
iterNode' = do
  { eventTarget, nodes, isChecked, isShiftKey } <- ask
  isInBetween <- get
  liftEffect $ logShow isChecked
  -- case isChecked && isShiftKey of
  --   true -> do
  --     liftEffect $ foreachE nodes (\node ->
  --                                   if (Target eventTarget) == (Target $ Node.toEventTarget node)
  --                                   then logShow isInBetween
  --                                   else logShow isInBetween)
  --   false -> liftEffect $ logShow "test"

iterNodes
  :: forall m. Monad m
  => MonadEffect m
  => EventTarget
  -> Array Node
  -> Boolean
  -> Boolean
  -> StateT Boolean m Unit
iterNodes evtTarget nodes isChecked isShiftKey = do
  isInBetween <- get
  case isChecked && isShiftKey of
    true -> do
      liftEffect $ foreachE nodes (\node ->
                                    if (Target evtTarget) == (Target $ Node.toEventTarget node)
                                    then logShow isInBetween
                                    else logShow isInBetween)
    false -> liftEffect $ logShow "test"

effHandleCheck
  :: forall m. Bind m
  => Monad m
  => MonadEffect m
  => ReaderT (Array Node) m EventListener
effHandleCheck = do
  nodes <- ask
  liftEffect $ EventTarget.eventListener $ \e -> void do
    isShiftKey <- pure <<< MouseEvent.shiftKey <<< eventToMouseEvent $ e
    case Event.target e of
      Nothing -> pure unit
      Just evtTarget -> do
        isChecked <- HTMLInputElement.checked $ eventToHtmlInputElement evtTarget
        runStateT (iterNodes evtTarget nodes isChecked isShiftKey) false *> pure unit

main :: Effect Unit
main = do
  parentNode <- effParentNode
  nodeList <-
    runReaderT getAllElements { parentNode: parentNode, targetElement: ".inbox input[type='checkbox']" }
  nodeArr <- NodeList.toArray nodeList
  handleCheck <- runStateT (runReaderT effHandleCheck nodeArr) false
  foreachE
    nodeArr
    (\node -> EventTarget.addEventListener EventTypes.click (fst handleCheck) false (Node.toEventTarget node))

