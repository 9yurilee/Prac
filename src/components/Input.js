import react from 'react';
import styled from 'styled-components';
import '../App.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = () => {
  const [clicked, setClicked] = react.useState(false);
  const checkEmail = () => {};

  const confirmPW = () => {
    setClicked(true);
  };
  return (
    <DIV>
      <div>
        <label for="email">E-mail</label>
        <InputWrap type="email" placeholder="E-mail" />
        <IconWrap>
          <CheckCircleIcon />
        </IconWrap>
      </div>

      <InputWrap type="password" placeholder="Password" />
      <IconWrap>
        <VisibilityOffIcon color={clicked ? 'red' : ''} />
      </IconWrap>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
`;

const Small = styled.div`
  font-size: 10px;
`;
const InputWrap = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px #aaa solid;
  :focus {
    outline: 1px solid black;
    border: none;
  }
  ::placeholder {
    color: #aaa;
  }
  margin: 30px 0px;
`;

const IconWrap = styled.div``;
export default Input;
