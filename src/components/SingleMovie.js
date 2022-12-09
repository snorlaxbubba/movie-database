function SingleMovie( {movie} ) {
  return (
    <div>
        <h1>Single Movie</h1>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
    </div>
  )
}
export default SingleMovie