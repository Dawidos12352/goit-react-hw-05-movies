import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Item, Author, Content } from './Reviews.styled';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {

        const API_KEY = '0adfc883720d7cdfb3459be3bc3ae0bc';

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
        alert(
          'Error! Something went wrong.'
        );
      }
    };

    getMovieReviews();

    return () => {
      setReviews([]);
    };
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <Author>Author: {review.author}</Author>
              <Content>{review.content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <List>
          <Item>
            <Author>There's no reviews yet.</Author>
          </Item>
        </List>
      )}

      <List>
        {reviews &&
          reviews.map(review => (
            <Item key={review.id}>
              <Author>Author: {review.author}</Author>
              <Content>{review.content}</Content>
            </Item>
          ))}
      </List>
    </div>
  );
};

export default Reviews;