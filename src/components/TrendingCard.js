import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
import { Link } from 'react-router-dom';



function TrendingCard({trending}) {

    const favoriteItems = useSelector( (state) => state.favorite.items );
    const dispatch = useDispatch();

    function inFavorites(id, array) {
        return array.some(item => item.id === id);
      }

  return (

    
    <div>
        <h2>{trending.title}</h2>
        <h2>{trending.name}</h2>
        {inFavorites(trending.id, favoriteItems) === true ?
          <button onClick={() => dispatch(deleteFavorite(trending))}>Remove from Favorites</button> : 
          <button onClick={() => dispatch(addFavorite(trending))}>Add to Favorites</button>}
          <Link to={`/movie/${trending.id}`}>More Info</Link>

    </div>
  )
}
export default TrendingCard