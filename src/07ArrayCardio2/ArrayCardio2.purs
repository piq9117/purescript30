module ArrayCardio2 where

-- Base
import Prelude
import Data.Foldable (all, any, find)
import Data.Int (ceil)
import Data.Maybe (Maybe(..))
import Data.Array (dropWhile, findIndex)

-- Effect
import Effect (Effect)
import Effect.Console (logShow)
import Data.JSDate (getFullYear, now)

type Person =
  { name :: String
  , year :: Int
  }

type Comment =
  { text :: String
  , id :: Int
  }

comments :: Array Comment
comments =
  [ { text: "Love this!", id: 523423 }
  , { text: "Super good", id: 823423 }
  , { text: "You are the best", id: 2039842 }
  , { text: "Ramen is my fav food ever", id: 123523 }
  , { text: "Nice Nice Nice!", id: 542328 }
  ]

people :: Array Person
people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
  ]

isAdult :: Array Person -> Int -> { isAdult :: Boolean }
isAdult ps currentYear =
  { isAdult: any (\p -> currentYear - p.year >= 19) ps }

allAdults :: Array Person -> Int -> { allAdults :: Boolean }
allAdults ps currentYear =
  { allAdults: all (\p -> currentYear - p.year >= 19) ps }

findCommentById :: Int -> Array Comment -> Maybe Comment
findCommentById comId cms =
  find (\c -> c.id == comId) cms

deleteCommentById :: Int -> Array Comment -> Array Comment
deleteCommentById comId cms =
  case findIndex (\c -> c.id == comId) cms of
    Nothing -> []
    Just index -> dropWhile (\c -> c.id == index) cms

main :: Effect Unit
main = do
  jsdate <- now
  currentYear <- getFullYear jsdate
  logShow $ isAdult people (ceil currentYear)
  logShow $ allAdults people (ceil currentYear)
  logShow $ findCommentById 823423 comments
  logShow $ deleteCommentById 823423 comments

