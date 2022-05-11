import react from 'react';
import styled from 'styled-components';
import '../App.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = () => {
  const [warning, setWarning] = react.useState(false);

  const [showPw, setShowPw] = react.useState(false);

  const clickEye = () => {
    setShowPw(!showPw);
  };

  return (
    <div className="input">
      <Small>E-mail</Small>
      <Wrap>
        <InputWrap type="email" placeholder="E-mail" />
        <CheckCircleIcon style={{ position: 'absolute', width: '18px', right: '30px', top: '5px' }} />
        {warning ? <Error>Invalid E-mail address</Error> : ''}
      </Wrap>

      <Small>Password</Small>
      <Wrap>
        <InputWrap type={showPw ? 'text' : 'password'} placeholder="Password" />
        {showPw ? (
          <VisibilityIcon onClick={clickEye} style={{ color: '#0abab5', position: 'absolute', width: '22px', right: '30px', top: '5px' }} />
        ) : (
          <VisibilityOffIcon onClick={clickEye} style={{ color: 'dimgray', position: 'absolute', width: '22px', right: '30px', top: '5px' }} />
        )}
      </Wrap>
    </div>
  );
};

const Small = styled.div`
  font-size: 11px;
  color: dimgray;
  margin: 0px 5px 2px;
`;

const Wrap = styled.div`
  width: 330px;
  height: 30px;
  position: relative;
  margin-bottom: 20px;
`;
const InputWrap = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  color: dimgray;
  padding-left: 10px;
  ::placeholder {
    color: #ddd;
  }
  :focus {
    outline: 1px solid dimgray;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 11px;
`;

const PwWrap = styled.div``;

export default Input;
