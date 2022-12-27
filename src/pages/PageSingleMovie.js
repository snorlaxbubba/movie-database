import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from '../components/SingleMovie';
import { API_KEY } from "../globals/globals";

function PageSingleMovie() {

  const [moviesData, setMoviesData] = useState(false);
  const [castData, setCastData] = useState(false);
  const [error, setError] = useState(false);

  const errorMessage = 'oh no, something went wrong. Please try again later';

  const { id } = useParams()

  useEffect(() => { 
  const fetchMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
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
      setMoviesData(data)
    }
  }

  const fetchCast = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
                      .catch(err => {
                        castData !== false && setCastData(false);
                        setError(errorMessage);
                      })
    const data = await res.json();

    if(data.success === false) {
      castData !== false && setCastData(false);
      error !== false && setError(false);
      setError(errorMessage);
    }
    else
    {
      error !== false && setError(false);
      setCastData(data)
    }
  }
  fetchCast();
  fetchMovies();

}, [error, id, castData, moviesData]);


  return (
    <section>
      {error !== false && <p>{error}</p>}
      {moviesData !== false && <SingleMovie movie={moviesData} actor={castData}/>}


    </section>
  )
}
export default PageSingleMovie