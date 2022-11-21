import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import UserBox from './components/UserBox';
import BoardBox from './components/BoardBox';

function App() {
  return (
    <AppBox>
      <UserBox />
      <BoardBox />
    </AppBox>
  );
}

const AppBox = styled.div`
  background-color : rgb(245,245,245);
  height : 200px; width : auto;
`;

export default App;
