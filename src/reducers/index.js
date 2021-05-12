import { ADD_MOVIES } from '../actions'

const initialMoviesState = {
	list: [],
	favourites: []
}
export default function movies ( prevState = initialMoviesState, action ) {
	if(action.type === ADD_MOVIES )
		return {
			...prevState,
			list: action.movies
		}
	return prevState
}
