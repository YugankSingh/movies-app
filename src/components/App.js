import { data } from '../data'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import React from 'react'
import { addMovies, setIsOnFavourites } from '../actions'


class App extends React.Component {
	componentDidMount(){
		const {dispatch} = this.props
		// make api call over here
		dispatch( addMovies( data ) )
	}

	isMovieFavourite = (movie) => {
		const { movies } = this.props
		const {favourites} = movies

		const index = favourites.indexOf(movie)

		// if movie is not found
		if(index === -1)
			return false
		return true

	}
	switchToFavourites = () => {
		let {dispatch} = this.props
		dispatch( setIsOnFavourites(true) )
	}
	switchToMovies = () => {
		let {dispatch} = this.props
		dispatch( setIsOnFavourites(false) )
	}
	render = () => {
		const { movies,dispatch } = this.props
		const { favourites, list, isOnFavourites } = movies
		const movieList = isOnFavourites ? favourites : list
		console.log('RENDERING APP')
		
		return (
			<div className="App">
				<Navbar/>
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
								dispatch={dispatch}
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



function mapStateToProps(state){
	return {
		movies: state.movies,
		search: state.search
	}
}



let ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
