import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import React from 'react'
import { addMovies, setIsOnFavourites } from '../actions'

class App extends React.Component {
	componentDidMount(){
		const {store} = this.props

		store.subscribe( () => {
			console.log('RENDER');
			
			this.forceUpdate()
		} )
		// make api call over here
		store.dispatch( addMovies( data ) )
	}

	isMovieFavourite = (movie) => {
		const { movies } = this.props.store.getState()
		const {favourites} = movies

		const index = favourites.indexOf(movie)

		// if movie is not found
		if(index == -1)
			return false
		return true

	}
	switchToFavourites = () => {
		let {store} = this.props
		store.dispatch( setIsOnFavourites(true) )
	}
	switchToMovies = () => {
		let {store} = this.props
		store.dispatch( setIsOnFavourites(false) )
	}
	render = () => {
		let {store} = this.props

		const { movies } = store.getState()
		const { favourites, list, isOnFavourites } = movies
		const movieList = isOnFavourites ? favourites : list
		console.log('RENDER')
		console.log('STATE', store.getState())
		return (
			<div className="App">
				<Navbar />
				<div className="main">
					<div className="tabs">
						<div className={`tab ${isOnFavourites ? '': 'active-tabs' }`} onClick={this.switchToMovies} >Movies</div>
						<div className={`tab ${isOnFavourites ? 'active-tabs' : '' }`} onClick={this.switchToFavourites} >Favorites</div>
					</div>

					<div className="list">
						{movieList.map( (movie, index) => 
							<MovieCard
							movie={movie}
							key={index} 
							dispatch={store.dispatch}
							isFavourite={this.isMovieFavourite(movie)}
							/>
						)}
					</div>
					{ movieList.length === 0 ? <div className='no-movies' > <strong>Oops!!</strong> Seems like you haven't added any movies in Favourites</div> : null }
				</div>
			</div>
		);
		}
}

export default App;
