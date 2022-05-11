import react from 'react';
import styled from 'styled-components';
import '../App.css';

const Toggle = () => {
  const [clicked, setClicked] = react.useState(true);
  const [clickDetail, setClickDetail] = react.useState(false);

  const clickMenu = () => {
    setClicked(!clicked);
    setClickDetail(!clickDetail);
  };

  return (
    <div className="toggle">
      <Menu onClick={clickMenu} style={{ backgroundColor: clicked ? '#fff' : '', color: clicked ? 'dimgray' : '' }}>
        기본
      </Menu>
      <Menu onClick={clickMenu} style={{ backgroundColor: clickDetail ? '#fff' : '', color: clickDetail ? 'dimgray' : '' }}>
        상세
      </Menu>
    </div>
  );
};

const Menu = styled.div`
  width: 49%;
  height: 88%;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;
`;

export default Toggle;
