import PropTypes from 'prop-types';
import { Field, Button } from './Input.styled';

const Input = ({ inputValue, onSubmit }) => {
  return (
    <form>
      <Field
        type="text"
        name="query"
        value={inputValue}
        onSubmit={event => onSubmit(event.target.value)}
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

Input.propTypes = {
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Input;