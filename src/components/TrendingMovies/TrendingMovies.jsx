import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingLink, TrendingItem } from './TrendingMovies.styled';

export const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {

        const API_KEY = '0adfc883720d7cdfb3459be3bc3ae0bc';

        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
        alert(
          'Error! Something went wrong.'
        );
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <TrendingItem key={movie.id}>
              <TrendingLink to={`movies/${movie.id}`} state={{ from: '/' }}>
                {movie.title}
              </TrendingLink>
            </TrendingItem>
          ))}
      </ul>
    </div>
  );
};