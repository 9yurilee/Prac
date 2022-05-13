import react from 'react';
import styled from 'styled-components';
import '../App.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const DropDown = () => {
  const [isOpen, setIsOpen] = react.useState(false);
  const [clickedMenu, setClickedMenu] = react.useState('전체');

  const myList = ['전체', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];

  const clickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div onClick={clickOpen} className="dropdown" style={{ position: 'relative', marginBottom: '10px' }}>
        {clickedMenu}
        <ArrowDropDownIcon style={{ position: 'absolute', right: '10px' }} />
      </div>
      {isOpen ? (
        <>
          <Result>
            {/* <div style={{ position: 'relative' }}>
              <Search type="text" />
              <SearchIcon style={{ position: 'absolute', top: '10px' }} />
            </div> */}
            {myList.map((e, i) => (
              <div
                onClick={() => {
                  setClickedMenu(e);
                  setIsOpen(!isOpen);
                }}
                key={i}
                style={{ cursor: 'pointer' }}
              >
                {e}
              </div>
            ))}
          </Result>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

const Search = styled.input`
  width: 100%;
  height: 35px;
  background-color: #ada;

  border: none;

  :focus {
    outline: none;
  }

  display: flex;
  align-items: center;
`;

const Result = styled.div`
  width: 280px;
  height: 280px;
  border: 1px solid #bbb;
  border-radius: 5px;
  /* border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px; */

  padding: 5px 0px 5px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default DropDown;
