import MovieCard from './MovieCard';

function Movies({ moviesData }) {
  return (
    <div className='movie-wrapper'>
      {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}
export default Movies