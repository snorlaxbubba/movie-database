import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../features/favorites/favoritesSlice';


function Favorite() {

    const favoriteItems = useSelector( (state) => state.favorite.items);
    const dispatch = useDispatch();


  return (
    <>
    <div>
        {favoriteItems.map((item) => {
            return(
                <div>
                    <h2>{item.title}</h2>
                    <h2>{item.name}</h2>
                    <button onClick={() => dispatch(deleteFavorite(item))}>Remove from Favorites</button> 
                </div>
            )
        })} 
    </div>
    </>
  )
}
export default Favorite