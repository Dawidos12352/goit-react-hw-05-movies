import { Main } from 'components/App.styled';
import Input from 'components/Input/Input';
import SearchResults from 'components/SearchResults/SearchResults';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Main>
      <Input value={movieName} onSubmit={updateQuery} />
      <SearchResults movieName={movieName} />
    </Main>
  );
};

export default Movies;