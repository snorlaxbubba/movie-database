import { useEffect, useState } from "react";
import Movies from '../components/Movies';
import NavSortMovies from "../components/NavSort";

import { API_KEY } from "../globals/globals";

function PageHome({ sort }) {

  const [moviesData, setMoviesData ] = useState(false);
  const [error, setError] = useState(false);

  const errorMessage = 'Oh no, Something went wrong. Please try again later';

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`)
                        .catch(err => {
                            moviesData !== false && setMoviesData(false);
                            setError(errorMessage);
                        })
    const data = await res.json();

    if(data.success === false) {
      moviesData !== false && setMoviesData(false);
      error !== false && setError(false);
      setError(errorMessage);
    }
    else
    {
      error !== false && setError(false);
      // Grab the first 12 movies from the API
      const first12Movies = data.results.splice(0,12);
      setMoviesData(first12Movies);
    }
    }

    fetchMovies()
  }, [error, moviesData, sort]);


  return (
    <section>
      <NavSortMovies />
      {error !== false && <p>{error}</p>}
      {moviesData !== false && <Movies moviesData={moviesData} />}

    </section>
  )
}
export default PageHome