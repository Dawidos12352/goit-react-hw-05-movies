import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import Button from 'components/Button/Button';
import { Main } from 'components/App.styled';
import { Link } from 'components/Button/Button.styled';
import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieInfo = () => {
  const { movieId } = useParams();
  return (
    <Main>
      <Button />
      <MovieDetails />
      <Link
        to={`/movies/${movieId}/cast`}
        state={{ from: `/movies/${movieId}` }}
      >
        Show cast
      </Link>
      <Link
        to={`/movies/${movieId}/reviews`}
        state={{ from: `/movies/${movieId}` }}
      >
        Show reviews
      </Link>
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};