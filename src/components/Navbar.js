import React from "react"
import { connect } from "react-redux"
import { handleMovieSearch, handleAddToMoviesFromSearch } from "../actions"

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shouldShowSearchResults: true,
			searchText: "",
		}
	}
	handleAddToMovies = movie => {
		console.log("initiating add to movies")
		let { dispatch } = this.props
		dispatch(handleAddToMoviesFromSearch(movie))
	}
	handleSearch = async () => {
		const { searchText } = this.state
		console.log(searchText)
		handleMovieSearch(searchText)(this.props.dispatch)
	}
	handleOnChange = e => {
		this.setState({
			searchText: e.target.value,
		})
	}
	render() {
		const { shouldShowSearchResults, result: movie } = this.props.search
		return (
			<div className="nav">
				<div className="search-container">
					<input onChange={this.handleOnChange} />
					<button id="search-btn" onClick={this.handleSearch}>
						Search
					</button>
					{shouldShowSearchResults && (
						<div className="search-results">
							<div className="search-result">
								<img src={movie.Poster} alt="searched movie poster" />

								<div className="movie-info">
									<span>{movie.Title}</span>
									<button onClick={Lewd => this.handleAddToMovies(movie)}>
										Add to Movies
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ search }) {
	return {
		search,
	}
}
const ConnectedNavbar = connect(mapStateToProps)(Navbar)

export default ConnectedNavbar
