export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_IS_ON_FAVOURITES = 'SET_IS_ON_FAVOURITES'

export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'
export const ADD_MOVIE_FROM_SEARCH = 'ADD_MOVIE_FROM_SEARCH'

// action creators
export function addMovies ( movies ) {
	return {
		type: ADD_MOVIES,
		movies: movies
	}
}
export function handleAddToMoviesFromSearch (movie){
	return {
		type: ADD_MOVIE_FROM_SEARCH,
		movie: movie
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


export function handleMovieSearch(movieName) {
	return function(dispatch){
		
		const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${encodeURI(movieName)}`
		fetch(url)
		.then(res => res.json() )
		.then(movie => {
			console.log('fetching data from', url);
			dispatch(addMovieSearcResult(movie))
			return movie
		} )
		
	}
	
}

export function addMovieSearcResult (movie) {
	return {
		type: SET_SEARCH_RESULT,
		movie: movie
	}
}