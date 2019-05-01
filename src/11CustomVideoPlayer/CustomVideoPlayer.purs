module CustomVideoPlayer where

-- Base
import Prelude
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Effect.Class (liftEffect, class MonadEffect)
import Data.Maybe (Maybe(..))

-- Effect
import Effect (Effect)
import Effect.Console (logShow)

-- DOM
import Web.HTML as HTML
import Web.HTML.Window as Window
import Web.DOM.ParentNode (ParentNode, QuerySelector(..))
import Web.DOM.ParentNode as ParentNode
import Web.DOM.Internal.Types (Element, Node)
import Web.DOM.NodeList as NodeList
import Web.HTML.HTMLDocument (HTMLDocument)
import Web.HTML.HTMLDocument as HTMLDocument
import Web.DOM.Element as Element
import Web.HTML.HTMLMediaElement (HTMLMediaElement)
import Web.HTML.HTMLMediaElement as HTMLMediaElement
class IsParentNode doc where
  toParentNode :: doc -> ParentNode

instance htmldocIsParentNode :: IsParentNode HTMLDocument where
  toParentNode = HTMLDocument.toParentNode

instance elementIsParentNode :: IsParentNode Element where
  toParentNode = Element.toParentNode

class IsHTMLMediaElement el where
  fromElement :: el -> Maybe HTMLMediaElement

instance elementHtmlMediaElement :: IsHTMLMediaElement Element where
  fromElement = HTMLMediaElement.fromElement

effParentNode :: Effect ParentNode
effParentNode =
 pure <<< toParentNode =<< Window.document =<< HTML.window

type ElementEnv =
  { parentNode :: ParentNode
  , targetElement :: String
  }

getElement
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT ElementEnv m (Maybe Element)
getElement = do
  { parentNode, targetElement } <- ask
  liftEffect $ ParentNode.querySelector (QuerySelector targetElement) parentNode

getAllElements
  :: forall m. Bind m
  => MonadEffect m
  => ReaderT ElementEnv m (Array Node)
getAllElements = do
  { parentNode, targetElement } <- ask
  liftEffect $ NodeList.toArray =<< ParentNode.querySelectorAll (QuerySelector targetElement) parentNode

main :: Effect Unit
main = do
  parentNode <- effParentNode
  mPlayer <- runReaderT getElement { parentNode: parentNode, targetElement: ".player" }
  case mPlayer of
    Nothing -> pure unit
    Just player -> do
      let pNode = { parentNode: toParentNode player, targetElement: "" }
      mVideo <- pure <<< join <<< liftA1 fromElement =<< runReaderT getElement (pNode {targetElement = ".viewer"})
      mProgress <- runReaderT getElement (pNode { targetElement = ".progress" })
      mProgressBar <- runReaderT getElement (pNode { targetElement = ".progress_filled" })
      skipButtons <- runReaderT getAllElements (pNode { targetElement = "[data-skip]" })
      ranges <- runReaderT getAllElements (pNode { targetElement = ".player__slider" })
      case mVideo of
        Nothing -> pure unit
        Just video -> do
          isPaused <- HTMLMediaElement.paused video
          logShow isPaused
