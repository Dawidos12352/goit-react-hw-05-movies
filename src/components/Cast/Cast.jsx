import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Item, List, Name, PlaceholderImage } from './Cast.styled';
import axios from 'axios';
import placeholder from 'images/placeholder.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        
        const API_KEY = '0adfc883720d7cdfb3459be3bc3ae0bc';

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
        alert(
          'Error! Something went wrong.'
        );
      }
    };
    getMovieCast();

    return () => {
      setCast([]);
    };
  }, [movieId]);

  return (
    <List>
      {cast &&
        cast.map(actor => (
          <Item key={actor.id}>
            {actor.profile_path ? (
              <Image
                src={`https://www.themoviedb.org/t/p/w400${actor.profile_path}`}
                alt={`Portrait photo of ${actor.original_name}`}
              />
            ) : (
              <PlaceholderImage src={placeholder} />
            )}
            <Name>{actor.original_name}</Name>
            <p>as</p>
            {actor.character}
          </Item>
        ))}
    </List>
  );
};

export default Cast;