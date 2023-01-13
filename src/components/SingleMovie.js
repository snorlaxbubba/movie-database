function SingleMovie( {movie, actor} ) {
  let runtime = Math.round((movie.runtime / 60) * 100)/100;
  let rating = movie.vote_average * 10;

  //INSERT for loop function with i=0, i<5, i++

  return (
    <>
    <div>
        <h1>Single Movie</h1>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="movie-image"/>
        <p>Runtime: {runtime} hours</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {rating}%</p>

        {actor.cast === undefined ?
        <p>No Cast info Available</p>:
        <section className="cast-articles">
          <article>
            <h2>{actor.cast[0].name}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${actor.cast[0].profile_path}`} alt={actor.cast[0].name} className="movie-image"/>
          </article>

          <article>
            <h2>{actor.cast[1].name}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${actor.cast[1].profile_path}`} alt={actor.cast[1].name} className="movie-image"/>
          </article>

          <article>
            <h2>{actor.cast[2].name}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${actor.cast[2].profile_path}`} alt={actor.cast[2].name} className="movie-image"/>
          </article>

          <article>
            <h2>{actor.cast[3].name}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${actor.cast[3].profile_path}`} alt={actor.cast[3].name} className="movie-image"/>
          </article>

          <article>
            <h2>{actor.cast[4].name}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${actor.cast[4].profile_path}`} alt={actor.cast[4].name} className="movie-image"/>
          </article>

        </section>
}

    </div>
    </>
  )
}
export default SingleMovie