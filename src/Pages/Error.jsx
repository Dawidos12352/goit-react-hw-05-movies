import { Container, Main, Text, Homepage } from 'components/App.styled';

const Error = () => {
  return (
    <Main>
      <Container>
        <Text>404</Text>
        <h2>Page not found</h2>
        <Homepage to="/">Go back to homepage</Homepage>
      </Container>
    </Main>
  );
};

export default Error;