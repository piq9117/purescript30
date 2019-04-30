module HoldShiftAndCheckboxes where

-- Base
import Prelude
import Unsafe.Coerce (unsafeCoerce)
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Data.Maybe (Maybe(..))
import Data.Symbol (SProxy(..))
import Record as Record

-- Effect
import Effect (Effect, foreachE)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref

-- DOM
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

nodeToHtmlInputElement :: Node -> HTMLInputElement
nodeToHtmlInputElement = unsafeCoerce

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
  { isInBetween :: Ref Boolean
  , lastChecked :: Ref (Maybe EventTarget)
  , nodes :: Array Node
  }

type IterNodeEnv =
  { nodes :: Array Node
  , eventTarget :: EventTarget
  , isInBetween :: Ref Boolean
  , lastChecked :: Ref (Maybe EventTarget)
  }

iterNodes
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT IterNodeEnv m Unit
iterNodes = do
  { nodes, eventTarget, isInBetween, lastChecked } <- ask
  liftEffect $ foreachE
               nodes
                (\node -> do
                    mLastChecked <- Ref.read lastChecked
                    case mLastChecked of
                      Nothing -> pure unit
                      Just lc -> do
                        let boolFlag =
                              (Target $ Node.toEventTarget node) == (Target $ eventTarget) ||
                              (Target $ Node.toEventTarget node) == (Target lc)
                        void $ if boolFlag
                              then Ref.modify_ not isInBetween
                              else pure unit
                        isb <- Ref.read isInBetween
                        void $ if isb
                              then HTMLInputElement.setChecked true (nodeToHtmlInputElement node)
                              else pure unit)

effHandleCheck
  :: forall m. Bind m
  => Monad m
  => MonadEffect m
  => ReaderT HandleCheckEnv m EventListener
effHandleCheck = do
  env@{ isInBetween, lastChecked, nodes } <- ask
  liftEffect $ EventTarget.eventListener $ \e -> void do
    isShiftKey <- pure <<< MouseEvent.shiftKey <<< eventToMouseEvent $ e
    case Event.target e of
      Nothing -> pure unit
      Just evtTarget -> do
        isChecked <- HTMLInputElement.checked $ eventToHtmlInputElement evtTarget
        case (isShiftKey && isChecked) of
          true -> do
            let evtTargetField = SProxy :: SProxy "eventTarget"
            runReaderT iterNodes (Record.insert evtTargetField evtTarget env)
            Ref.modify_ (const $ Just evtTarget) lastChecked
          false -> Ref.modify_ (const Nothing) lastChecked

main :: Effect Unit
main = do
  parentNode <- effParentNode
  nodeList <-
    runReaderT getAllElements { parentNode: parentNode, targetElement: ".inbox input[type='checkbox']" }
  nodeArr <- NodeList.toArray nodeList
  handleCheckEnv <-
    Ref.new false >>=
    \bool -> Ref.new Nothing >>= \lc ->
    pure { nodes: nodeArr, isInBetween: bool, lastChecked: lc }
  handleCheck <- runReaderT effHandleCheck handleCheckEnv
  foreachE
    nodeArr
    (\node -> EventTarget.addEventListener EventTypes.click handleCheck false (Node.toEventTarget node))

