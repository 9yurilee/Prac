import { color } from '@mui/system';
import react from 'react';
import styled from 'styled-components';

const Tab = () => {
  const [first, setFirst] = react.useState(true);
  const [second, setSecond] = react.useState(false);
  const [third, setThird] = react.useState(false);

  const clickMenu = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  const clickSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  const clickThird = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  return (
    <div className="tab">
      <Menu onClick={clickMenu} style={{ borderBottom: first ? '' : 'none', color: first ? 'dimgray' : '' }}>
        감자
      </Menu>
      <Menu onClick={clickSecond} style={{ borderBottom: second ? '' : 'none', color: second ? 'dimgray' : '' }}>
        고구마
      </Menu>
      <Menu onClick={clickThird} style={{ borderBottom: third ? '' : 'none', color: third ? 'dimgray' : '' }}>
        카레라이스
      </Menu>
    </div>
  );
};

const Menu = styled.div`
  width: 30%;
  height: 100%;
  border-bottom: 2.5px solid #ade;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export default Tab;
