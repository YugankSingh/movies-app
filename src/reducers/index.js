import { ADD_MOVIES } from '../actions'
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'
import { SET_IS_ON_FAVOURITES } from '../actions'


const initialMoviesState = {
	list: [],
	favourites: [],
	isOnFavourites: false,
}
export default function movies ( prevState = initialMoviesState, action ) {
	switch (action.type){
		case ADD_MOVIES:
			return {
				...prevState,
				list: action.movies
			}

			case ADD_TO_FAVOURITES:
				return{
					...prevState,
					favourites: [...prevState.favourites, action.movie]
				}

			case REMOVE_FROM_FAVOURITES:
				let filteredFavourites = prevState.favourites.filter( element => element != action.movie )
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
	
	return prevState
}
