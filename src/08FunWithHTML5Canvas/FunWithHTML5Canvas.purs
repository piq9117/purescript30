module FunWithHTML5Canvas where

-- Base
import Prelude
import Control.Monad.Reader (ask, ReaderT, runReaderT)
import Data.Int (toNumber)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect)
import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Console (logShow)
import Effect.Ref (Ref)
import Effect.Ref as Ref

-- DOM
import Graphics.Canvas (CanvasElement, LineJoin(..), LineCap(..), Context2D)
import Graphics.Canvas as Canvas
import Web.DOM.Element as Element
import Web.DOM.Internal.Types (Element)
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as ParentNode
import Web.Event.EventTarget (EventListener)
import Web.Event.EventTarget as EventTarget
import Web.Event.Internal.Types (Event, EventTarget)
import Web.Event.Event (EventType)
import Web.HTML as HTML
import Web.HTML.HTMLDocument as HTMLDocument
import Web.HTML.Window (Window)
import Web.HTML.Window as Window
import Web.UIEvent.MouseEvent.EventTypes as MouseEvtTypes

foreign import toCanvasElement :: Element -> CanvasElement
foreign import offsetX :: Event -> Number
foreign import offsetY :: Event -> Number
foreign import lineWidth :: Context2D -> Number

class IsEventTarget e where
  toEventTarget :: e -> EventTarget

instance elementToEventTarget :: IsEventTarget Element where
  toEventTarget = Element.toEventTarget

effParentNode :: Effect {parentNode :: ParentNode, window :: Window }
effParentNode = do
  w <- HTML.window
  doc <- Window.document w
  pure $ { parentNode: HTMLDocument.toParentNode doc, window: w }

getElement
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT { parentNode :: ParentNode, targetElement :: String } m (Maybe Element)
getElement = do
  { parentNode, targetElement } <- ask
  EffectClass.liftEffect $ ParentNode.querySelector (QuerySelector targetElement) parentNode

type DrawEnv =
  { drawingStateRef :: Ref DrawingState
  , context2d :: Context2D
  }



type DrawingState =
  { isDrawing :: Boolean
  , lastX :: Number
  , lastY :: Number
  , hue :: Number
  , direction :: Boolean
  , lineWidth :: Number
  }

drawingStateDefault :: DrawingState
drawingStateDefault =
  { isDrawing: false
  , lastX: 0.0
  , lastY: 0.0
  , hue: 0.0
  , direction: false
  , lineWidth: 100.0
  }

listener
  :: forall target. IsEventTarget target
  => (Event -> Effect Unit)
  -> EventType
  -> target
  -> Effect Unit
listener f evtType e =
  EventTarget.eventListener f >>=
  \f' -> EventTarget.addEventListener evtType f' false (toEventTarget e)

draw :: Ref DrawingState -> Context2D -> Event -> Effect Unit
draw drawingStateRef context2d e = do
  drawingState <- Ref.read drawingStateRef
  case drawingState.isDrawing of
    true -> do
      Canvas.setStrokeStyle context2d ("hsl(" <> show drawingState.hue <> ", 100%, 50%)")
      Canvas.setLineWidth context2d drawingState.lineWidth
      Canvas.beginPath context2d
      Canvas.moveTo context2d drawingState.lastX drawingState.lastY
      Canvas.lineTo context2d (offsetX e) (offsetY e)
      Canvas.stroke context2d
      void $
        Ref.modify
        (\b -> b { hue = incHue b.hue, lastX = offsetX e, lastY = offsetY e })
        drawingStateRef
      void $ if drawingState.lineWidth >= 100.0
              then Ref.modify_ (\b -> b { direction = true }) drawingStateRef
              else pure unit
      void $ if drawingState.lineWidth <= 1.0
              then Ref.modify_ (\b -> b { direction = false }) drawingStateRef
              else pure unit
      void $ if drawingState.direction
              then Ref.modify_ (\b -> b { lineWidth = b.lineWidth - 1.0 }) drawingStateRef
              else Ref.modify_ (\b -> b { lineWidth = b.lineWidth + 1.0 }) drawingStateRef

    false -> pure unit
    where incHue n = if n >= 360.0 then 0.0 else n + 1.0
          decLineWidth n = if n >= 100.0 then n - 1.0 else n

drawingMouseDown :: Ref DrawingState -> Event -> Effect Unit
drawingMouseDown drawingState e =
  Ref.modify_ (\b -> b { isDrawing = true, lastX = offsetX e, lastY = offsetY e }) drawingState

drawingMouseUp :: Ref DrawingState -> Event -> Effect Unit
drawingMouseUp drawingState e =
  Ref.modify_ (\b -> b { isDrawing = false }) drawingState

main :: Effect Unit
main = do
  { parentNode, window } <- effParentNode
  mCanvas <- runReaderT getElement { parentNode: parentNode, targetElement: "#draw" }
  case mCanvas of
    Nothing -> pure unit
    Just canvas -> do
      drawingStateRef <- Ref.new drawingStateDefault
      drawingMouseup <- effDrawingMouseup drawingStateRef
      drawingMousedown <- effDrawingMousedown drawingStateRef
      context2d <- Canvas.getContext2D (toCanvasElement canvas)
      draw <- runReaderT effDraw { drawingStateRef: drawingStateRef, context2d: context2d }
      windowWidth <- Window.innerWidth window
      windowHeight <- Window.innerHeight window
      drawingState <- Ref.read drawingStateRef
      Canvas.setCanvasWidth (toCanvasElement canvas) (toNumber windowWidth)
      Canvas.setCanvasHeight (toCanvasElement canvas) (toNumber windowWidth)
      Canvas.setStrokeStyle context2d "#BADASSS"
      Canvas.setLineJoin context2d RoundJoin
      Canvas.setLineCap context2d Round
      Canvas.setLineWidth context2d drawingState.lineWidth
      listener (drawingMouseDown drawingStateRef) MouseEvtTypes.mousedown canvas
      listener (drawingMouseUp drawingStateRef) MouseEvtTypes.mouseup canvas
      listener (draw drawingStateRef context2d) MouseEvtTypes.mousemove canvas
