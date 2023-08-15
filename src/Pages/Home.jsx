import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { Main } from '../components/App.styled';

const Home = () => (
  <Main>
    <h1>Trending today</h1>
    <TrendingMovies />
  </Main>
);

export default Home;