import react from 'react';
import styled from 'styled-components';
import '../App.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const DropDown = () => {
  const [isOpen, setIsOpen] = react.useState(false);
  const [clickedMenu, setClickedMenu] = react.useState('All Symbols');
  const [inputText, setInputText] = react.useState('');

  console.log(inputText);

  const myList = ['All Symbols', 'BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'BANDUSD.PERP', 'XRPUSD.PERP'];

  const clickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div onClick={clickOpen} className="dropdown">
        <div style={{ paddingLeft: '10px' }}>{clickedMenu}</div>
        <ArrowDropDownIcon style={{ position: 'absolute', right: '10px' }} />
      </div>
      {isOpen ? (
        <Container>
          <SearchWrap>
            <SearchIcon style={{ width: '18px', color: '#ddd' }} />
            <SearchInput
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
            />
          </SearchWrap>
          <DropdownWrap>
            {myList
              .filter((val, i) => {
                if (i === 0 || inputText == '') {
                  return val;
                } else if (val.toLowerCase().includes(inputText.toLowerCase())) {
                  return val;
                }
              })
              .map((p, i) => (
                <Menu
                  onClick={() => {
                    setClickedMenu(p);
                    setIsOpen(!isOpen);
                  }}
                  key={i}
                  length={myList.length}
                >
                  {p}
                </Menu>
              ))}
          </DropdownWrap>
        </Container>
      ) : (
        ''
      )}
    </div>
  );
};

const Container = styled.div`
  width: 280px;
  height: 100%;

  border: 1px solid #bbb;
  border-radius: 5px;

  box-shadow: 0px 2px 4px #ddd;

  display: flex;
  flex-direction: column;
`;

const SearchWrap = styled.div`
  height: 40px;
  border-bottom: 1px solid #bbb;
  display: flex;
  align-items: center;

  padding-left: 10px;
`;

const SearchInput = styled.input`
  margin-left: 8px;
  border: none;
  color: #a4a4a4;
  font-size: 16px;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #ddd;
  }
`;

const DropdownWrap = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  height: 35px;
  padding-left: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    background-color: #eee;
  }
`;

export default DropDown;
