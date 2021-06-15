import {combineReducers} from 'redux'

import { ADD_MOVIES, ADD_MOVIE_FROM_SEARCH } from '../actions'
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'
import { SET_IS_ON_FAVOURITES, SET_SEARCH_RESULT } from '../actions'


const initialMoviesState = {
	list: [],
	favourites: [],
	isOnFavourites: false,
}
export function movies ( prevState = initialMoviesState, action ) {
	switch (action.type){
		case ADD_MOVIES:
			return {
				...prevState,
				list: action.movies
			}
		case ADD_MOVIE_FROM_SEARCH: 
			return{
				...prevState,
				list: [action.movie, ...prevState.list ]
		}
		case ADD_TO_FAVOURITES:
			return{
				...prevState,
				favourites: [...prevState.favourites, action.movie]
			}

		case REMOVE_FROM_FAVOURITES:
			let filteredFavourites = prevState.favourites.filter( element => element !== action.movie )
			return{
				...prevState,
				favourites: filteredFavourites
			}
		case SET_IS_ON_FAVOURITES:
			return {
				...prevState,
				isOnFavourites: action.value
			}
	
		default:
			return prevState
	}
}

const initialSearchState = {
	result: {},
	shouldShowSearchResults: false
}
export function search ( prevState = initialSearchState, action ){
	switch (action.type){
		case SET_SEARCH_RESULT:
			return{
				...prevState,
				result: action.movie,
				shouldShowSearchResults: true
			}
		case ADD_MOVIE_FROM_SEARCH:
			return{
				...prevState,
				shouldShowSearchResults: false
		}
		default :
		return prevState
	}
}

// const initialRootState = {
// 	movies: initialMoviesState,
// 	search: initialSearchState
// }


export default combineReducers({
	movies,
	search,
})