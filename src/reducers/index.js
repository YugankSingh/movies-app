export default function movies ( prevState = [], action ) {
	if(action.type == 'ADD_MOVIE')
		return action.movies
	return prevState
};