import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Item,
  List,
  Name,
  Year,
  Link,
  Error,
} from './SearchResults.styled';
import axios from 'axios';
import placeholder from 'images/placeholder.png';
import { PlaceholderImage } from './SearchResults.styled';

const SearchResults = ({ movieName }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {

        const API_KEY = '0adfc883720d7cdfb3459be3bc3ae0bc';

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`
        );
        setSearchedMovie(response.data.results);
      } catch (error) {
        alert(
          'Error! Something went wrong.'
        );
      }
    };
    if (movieName) {
      getMovies();
    }

  }, [movieName]);

  return (
    <List>
      {movieName && searchedMovie.length > 0 ? (
        searchedMovie.map(movie => (
          <Item key={movie.id}>
            {movie.poster_path ? (
              <Image
                src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.original_title} poster`}
              />
            ) : (
              <PlaceholderImage src={placeholder} />
            )}
            <Name>{movie.original_title}</Name>
            <Year>({movie.release_date.substring(0, 4)})</Year>
            <Link to={`/movies/${movie.id}`} state={{ from: '/movies' }}>
              Details
            </Link>
          </Item>
        ))
      ) : (
        <Error>{movieName ? `Erorr! No results found` : ''}</Error>
      )}
    </List>
  );
};

SearchResults.propTypes = {
  movieName: PropTypes.string.isRequired,
};

export default SearchResults;