module TypeAhead where

-- Base
import Prelude 
import Data.Either (Either(..), either)
import Control.Monad.Reader (ReaderT, ask, runReaderT)
import Data.Maybe (Maybe(..))
import Data.String.Regex as StrRegex
import Data.String.Regex.Flags (RegexFlags(..))
import Data.Array (catMaybes, length, filter)
import Data.String.Utils (fromCharArray)

-- Effect/Aff
import Effect (Effect)
import Effect.Aff (Fiber)
import Effect.Aff as Aff
import Effect.Class (class MonadEffect)
import Effect.Class as EffectClass
import Effect.Class.Console (log)
import Affjax as AX
import Affjax.ResponseFormat as ResponseFormat
import Effect.Uncurried (EffectFn2, runEffectFn2)

-- HTTP
import Data.HTTP.Method (Method(..))

-- DOM
import Web.DOM.ParentNode (QuerySelector(..), ParentNode)
import Web.DOM.ParentNode as ParentNode
import Web.DOM.Internal.Types (Element)
import Web.HTML as HTML
import Web.HTML.Window as Window
import Web.HTML.HTMLDocument as HTMLDocument
import Web.Event.EventTarget (EventListener, EventTarget)
import Web.Event.EventTarget as EventTarget
import Web.HTML.Event.EventTypes as EventTypes
import Web.DOM.Element as Element
import Web.Event.Event as Event
import Web.UIEvent.KeyboardEvent.EventTypes as KbEventTypes

-- JSON
import Data.Argonaut.Decode (getField, decodeJson, class DecodeJson)

foreign import value :: EventTarget -> String
foreign import innerHtmlImpl :: EffectFn2 Element String Unit

innerHtml :: Element -> String -> Effect Unit
innerHtml el str = runEffectFn2 innerHtmlImpl el str

newtype City = City
  { city :: String
  , growth_from_2000_to_2013 :: String
  , latitude :: Number
  , longitude :: Number
  , population :: String
  , rank :: String
  , state :: String
  }

instance showCity :: Show City where
  show (City c) = show $
    { city: c.city
    , growth_from_2000_to_2013 : c.growth_from_2000_to_2013
    , latitude: c.latitude
    , longitude : c.longitude
    , population: c.population
    , rank: c.rank
    , state: c.state
    }

instance decodeCity :: DecodeJson City where
  decodeJson json = do
    obj <- decodeJson json
    city <- getField obj "city"
    growth_from_2000_to_2013 <- getField obj "growth_from_2000_to_2013"
    latitude <- getField obj "latitude"
    longitude <- getField obj "longitude"
    population <- getField obj "population"
    rank <- getField obj "rank"
    state <- getField obj "state"
    pure $ City { city
                , growth_from_2000_to_2013
                , latitude
                , longitude
                , population
                , rank
                , state
                }

citiesUrl :: String
citiesUrl = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

effParentNode :: Effect ParentNode
effParentNode =
  pure <<< HTMLDocument.toParentNode =<< Window.document =<< HTML.window

getElement
  :: forall m. Bind m
  => MonadEffect m
  => String
  -> ReaderT ParentNode m (Maybe Element)
getElement targetElement =
  EffectClass.liftEffect <<< ParentNode.querySelector (QuerySelector targetElement) =<< ask

findMatches :: String -> Array City -> Array City
findMatches wordToMatch cities =
  filter
    (\(City place) ->
      either (const false) (isMatch place) (createRegex wordToMatch)) cities
    where createRegex w =
            StrRegex.regex w
            (RegexFlags {global: true, ignoreCase: true, multiline: true, sticky: false, unicode: false })
          isMatch place reg =
            length
            (catMaybes [StrRegex.match reg place.city, StrRegex.match reg place.state]) > 0


effDisplayMatch :: Array City -> Element -> Effect EventListener
effDisplayMatch cities el = EventTarget.eventListener $ \e -> void do
  case Event.target e of
    Nothing -> innerHtml el ""
    Just t -> do
      innerHtml el (fromCharArray $ map (\(City place) -> newHtmlEls place) (findMatches (value t) cities))
      where newHtmlEls place =
              "<li>" <>
                "<span class=\"name\">" <> place.city <> ", " <> place.state <> "</span>" <>
                "<span class=\"population\">" <> place.population <> "</span>" <>
              "</li>"

main :: Effect (Fiber Unit)
main = Aff.launchAff $ do
  parentNode <- EffectClass.liftEffect effParentNode
  typeAhead <- flip runReaderT parentNode $ do
    searchEl <- getElement ".search"
    suggetionEl <- getElement ".suggestions"
    pure { searchInput: searchEl, suggestions: suggetionEl }
  res <- AX.request (AX.defaultRequest { url = citiesUrl, method = Left GET, responseFormat = ResponseFormat.json })
  case res.body of
    Left err -> log $ "Error: " <> AX.printResponseFormatError err
    Right json ->
      case (decodeJson json) :: Either String (Array City) of
        Left err -> log $ "ERROR: " <> err
        Right cities ->
          case typeAhead.searchInput of
            Nothing -> pure unit
            Just searchInput -> do
              case typeAhead.suggestions of
                Nothing -> pure unit
                Just suggestions -> do
                  displayMatch <- EffectClass.liftEffect $ effDisplayMatch cities suggestions
                  eventListener EventTypes.change displayMatch searchInput
                  eventListener KbEventTypes.keyup displayMatch searchInput
                  where eventListener evtTypes f el =
                          EffectClass.liftEffect $
                          EventTarget.addEventListener evtTypes f false (Element.toEventTarget el)

