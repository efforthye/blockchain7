import logo from './logo.svg';
import './App.css';
import UserComponent from './components/User';
import BoardComponent from './components/Board';
import styled from 'styled-components';

function App() {
  return (
    // <div className="App">
    <AppBox>
      <UserComponent />
      <BoardComponent />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  max-width : 1200px;
  margin : 40px auto;
  border : 1px solid black;
  border-radius : 5px;
  padding : 10px;
`;