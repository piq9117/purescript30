module ReferenceVsCopy where

import Prelude
import Effect
import Effect.Console
import Data.Array
import Debug.Trace
import Record as Record
import Data.Symbol (SProxy(..))
import Data.Argonaut.Encode.Class
import Data.Argonaut.Core

players :: Array String
players =
  [ "Wes"
  , "Sarah"
  , "Ryan"
  , "Poppy"
  ]

team2 = slice 0 3 players

team3 = players <> []

person :: { name :: String, age :: Int }
person =
  { name: "Wes Bos"
  , age: 80
  }

cap2 :: {name :: String, age :: Int, number :: Int}
cap2 =
  let numberField = SProxy :: SProxy "number"
  in Record.insert numberField 99 (person {age = 12})

wes =
  { name: "Wes"
  , age: 100
  , social:
    { twitter: "@wesbos"
    , facebook: "wesbos.developer"
    }
  }

main :: Effect Unit
main = do
  traceM team2
  traceM person
  traceM cap2
  traceM $ stringify $ encodeJson wes
