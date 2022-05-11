import react from 'react';
import styled from 'styled-components';
// import '../App.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TogglePrac = () => {
  const [clicked, setClicked] = react.useState(false);
  const [emailClicked, setEmailClicked] = react.useState(false);

  const clicking = () => {
    setClicked(!clicked);
  };

  const emailClick = () => {
    setEmailClicked(!emailClicked);
  };

  return clicked ? <VisibilityIcon onClick={clicking} /> : <VisibilityOffIcon onClick={clicking} />;
  //   emailClicked ? <VisibilityOffIcon onClick={emailClick}
};
export default TogglePrac;
