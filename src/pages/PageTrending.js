import { useEffect, useState } from "react";
import NavTrending from "../components/NavTrending";
import Trendings from '../components/Trendings';

import { API_KEY } from "../globals/globals";

function PageTrending({ sort }) {
    const [trendingData, setTrendingData] = useState(false);
    const [error, setError] = useState(false);
  
    const errorMessage = 'Oh no, Something went wrong. Please try again later';

    
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/${sort}/week?api_key=${API_KEY}`)
                        .catch(err => {
                            trendingData !== false && setTrendingData(false);
                            setError(errorMessage);
                        })
    const trendingData = await res.json();

    if(trendingData.success === false) {
      trendingData !== false && setTrendingData(false);
      error !== false && setError(false);
      setError(errorMessage);
    }
    else
    {
      error !== false && setError(false);
      // Grab the first 12 movies from the API
      const first12Trends = trendingData.results.splice(0,12);
      setTrendingData(first12Trends);
    }
    }

    fetchTrending()
  }, [error, trendingData, sort]);
  return (
    <div>
        
      <NavTrending />
      {error !== false && <p>{error}</p>}
      {trendingData !== false && <Trendings trendingData={trendingData} />}
    </div>
  )
}
export default PageTrending