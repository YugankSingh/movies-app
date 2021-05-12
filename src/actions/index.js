export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_IS_ON_FAVOURITES = 'SET_IS_ON_FAVOURITES'


// action creators
export function addMovies ( movies ) {
	return {
		type: ADD_MOVIES,
		movies: movies
	}
}



export function addToFavourites ( movie ) {
	
	return {
		type: ADD_TO_FAVOURITES,
		movie: movie
	}
}
export function removeFromFavourites ( movie ) {
	return {
		type: REMOVE_FROM_FAVOURITES,
		movie: movie
	}
}



export function setIsOnFavourites  ( value ) {
	return {
		type: SET_IS_ON_FAVOURITES,
		value: value
	}
}