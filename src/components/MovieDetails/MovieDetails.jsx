import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Details,
  Headline,
  Info,
  Poster,
  Title,
  Score,
  PlaceholderImage,
} from './MovieDetails.styled';
import placeholder from 'images/placeholder.png';
import axios from 'axios';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {

        const API_KEY = '0adfc883720d7cdfb3459be3bc3ae0bc';

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        alert(
          
          'Error! Something went wrong.'
        );
      }
    };
    getMovieDetails();

    return () => {
      setMovie('');
    };
  }, [movieId]);

  const date = movie.release_date ? movie.release_date.substring(0, 4) : '';
  const genres = movie.genres
    ? movie.genres.map(genre => genre.name).join(', ')
    : '';

  return (
    <Container>
      {movie.poster_path ? (
        <Poster
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="Movie poster"
        />
      ) : (
        <PlaceholderImage src={placeholder} />
      )}
      <Details>
        <Title>
          {movie.original_title} {date}
        </Title>
        <Score>User score: {Math.trunc(movie.vote_average * 10)}%</Score>
        <Headline>Overview</Headline>
        <Info>{movie.overview}</Info>
        <Headline>Genres</Headline>
        <Info>{genres}</Info>
      </Details>
    </Container>
  );
};