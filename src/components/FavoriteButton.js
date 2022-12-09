function FavoriteButton({ movieObj, remove, handleFavoriteClick}) {

    function handleAddFavorite() {
        handleFavoriteClick(true, movieObj);
    }

    function handleRemoveFavorite() {
        handleFavoriteClick(true, movieObj);
    }

  return (
    <div>
        {remove === false ?
        <button onClick={handleAddFavorite}>Add to Favorites</button>:
        <button onClick={handleRemoveFavorite}>Remove From Favorites</button>}
    </div>
  )
}

FavoriteButton.defaultProps = {
    remove: false
}
export default FavoriteButton