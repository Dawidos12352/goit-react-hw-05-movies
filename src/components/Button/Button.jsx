import { useNavigate } from 'react-router-dom';
import { BtnBack } from './Button.styled';

const Button = () => {
  const navigate = useNavigate();

  return <BtnBack onClick={() => navigate(-1)}>Go back</BtnBack>;
};

export default Button;