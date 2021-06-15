import React from 'react';
import { addToFavourites, removeFromFavourites } from '../actions'



class MovieCard extends React.Component {
	handleFavouriteClick = () => {
		const { movie,dispatch } = this.props
		dispatch( addToFavourites(movie) )
	}
	handleUnfavouriteClick = () => {
		const { movie,dispatch } = this.props
		dispatch( removeFromFavourites(movie) )
	}
	render(){
		const { movie, isFavourite } = this.props
		return (
			<div className="movie-card">
				<div className="left">
					<img src={movie.Poster || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Comic_image_missing.svg/1264px-Comic_image_missing.svg.png'} alt="movie-poster" />
				</div>

				<div className="right">
					<div className="title">{ movie.title || movie.Title || 'Seems Like This Movie Have No Name' }</div>
					<div className="plot">{ movie.Plot || 'No Plot Available' }</div>
					<div className="footer">
						<div className="rating">{ movie.imdbRating || 'Rating Seems to Be missing' }</div>{
							isFavourite
							? <button 
									className="unfavourite-btn"
									onClick={this.handleUnfavouriteClick}
								>UnFavourite</button>
							:<button 
									className="favourite-btn"
									onClick={this.handleFavouriteClick}
								>Favourite</button>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
