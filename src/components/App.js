import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import React from 'react'
import {addMovies} from '../actions'

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
	render = () => {
		let {store} = this.props
		const { list }  = store.getState()
		console.log('RENDER')
		console.log('STATE', store.getState())
		return (
			<div className="App">
				<Navbar />
				<div className="main">
					<div className="tabs">
						<div className="tab">Movies</div>
						<div className="tab">Favorites</div>
					</div>

				<div className="list"></div>
					{list.map( (movie, index) => 
						<MovieCard
						movie={movie}
						key={index} 
						/>
					)}
				</div>
			</div>
		);
		}
}

export default App;
