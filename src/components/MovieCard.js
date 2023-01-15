import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const favoriteItems = useSelector( (state) => state.favorite.items);
  const dispatch = useDispatch();

  function inFavorites(id, array) {
    return array.some(item => item.id === id);
  }

  return (
    <div className="main-movie">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="movie-image"/>
      <div className="movie-rating-release">
        <p>{movie.vote_average * 10}%</p>
        <p>{movie.release_date}</p>
      </div>

      <p className="overview">{movie.overview}</p>
      <div className="movie-bracket">
        {
        inFavorites(movie.id, favoriteItems) === true ?
          <button onClick={() => dispatch(deleteFavorite(movie))} className="favorites-button">Remove from Favorites</button> : 
          <button onClick={() => dispatch(addFavorite(movie))} className="favorites-button">Add to Favorites</button>
        }
      </div>
      <div className="more-info-link">
      <Link to={`/movie/${movie.id}`} className="favorites-button">More Info</Link>
      </div>
    </div>
  )
}
export default MovieCard