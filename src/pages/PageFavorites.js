import { useSelector } from "react-redux"
import Favorite from '../components/Favorite';


function PageFavorites() {

  const favoriteItems = useSelector( (state) => state.favorite.items );

  return (
    <section>
      <h2>Favorites</h2>
      {favoriteItems.length === 0 ? <p>No items in your favorites.</p> : <Favorite /> }
    </section>
  );
}
export default PageFavorites