import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(""); //오늘의 과제

  return (
    <AppBox>
      <Todo></Todo>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  // pc를 기준으로 맞춤, 모바일을 기준으로 할 수도 있음
  max-width : 1300px;
  margin : auto;

  &.test{
    background-color : rgb(245,245,245);
    height : 100px;
  }

  @media only screen and (max-width : 1400px){
    max-width : 1000px;

  }
  @media only screen and (max-width : 1100px){
    max-width : 600px;
    
  }
  @media only screen and (max-width : 700px){
    max-width : 300px;
    
  }
`;

