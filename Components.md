# DATA

## DATA LAYER

- Dish nutritional Info (Public API)
- Home recipe list (Public API)
- User favorites (Local API)
- Custom recipe (Local API)

## DATA MODIFICATIONS

- Create custom recipe
- Add favorite recipe
- Remove favorite recipe
- Show next dishes (pagination)
- Show previous dishes
- Filter by category

# COMPONENTS

## CONTEXT

- Contains the funcion to load the recipes from public API
- Contains the funcion to load the recipes from local API
- Contains the funcion to add a recipes to favourites
- Contains the funcion to remove a recipe from favourites
- Contains the funcion to create a custom recipe
- Contains the function to filter results by word
- Contains the function to show the next recipe list
- Contains the function to show the previous recipe list
- Contains the function to check whether the fetch was successful or not
- Contains the function to check whether all requests have been resolved
- Contains the function to give feedback in case no results are found

## APP

## CARD

- Receives the funcion to add a recipes to favourites

## CARDLIST

- Receives the funcion to load the recipes from the API
- Receives the function to give feedback in case no results are found

## FAVORITESCARD

- Receives the funcion to remove a recipe from favourites

## FAVORITESCARDLIST

- Receives the funcion to load the recipes from local API

## HEADER

- Contains the Navbar Component

## NAVBAR

- Contains the links to HomePage / FavouritesPage

## SEARCHBAR

- Receives the function to filter results by word

## FORM

- Receives the function to create a custom recipe

## SERCHBUTTON

- Receives the function to filter results by word

## NEXTPAGEBUTTON

- Receives the function to show the next recipe list

## PREVIOUSPAGEBUTTON

- Receives the function to show the previous recipe list

## ERROR

- Receives the function to check whether the fetch was successful or not

## LOADING

- Receives the function to check whether all requests have been resolved

## 404
