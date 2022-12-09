import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";

function MovieCard({ movie }) {
  const favoriteItems = useSelector( (state) => state.favorite.items);
  const dispatch = useDispatch();

  function inFavorites(id, array) {
    return array.some(item => item.id === id);
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      {inFavorites(movie.id, favoriteItems) === true ?
          <button onClick={() => dispatch(deleteFavorite(movie))}>Remove from Favorites</button> : 
          <button onClick={() => dispatch(addFavorite(movie))}>Add to Favorites</button>}
    </div>
  )
}
export default MovieCard