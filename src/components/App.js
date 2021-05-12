import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'


function App() {
  return (
    <div className="App">
			<Navbar />
			<div className="main">
				<div className="tabs">
					<div className="tab">Movies</div>
					<div className="tab">Favorites</div>
				</div>

			<div className="list"></div>
				{data.map( movie => {
					return <MovieCard movie={movie} />
				} )}
			</div>
    </div>
  );
}

export default App;