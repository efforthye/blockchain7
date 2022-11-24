import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Todo from './components/Todo';  //Todo의 index.jsx를 가져옴
import { useState } from 'react';

function App() {

  // 오늘의 과제 : 회원가입, 로그인 추가하기(공부 끝나고)
  // 회원가입, 로그인 모달 창으로 띄우기
  // const [user, setUser] = useState([
  //   {name : "박혜림", id : "happy", pw : "happyworld"},
  // ]); 

  return (
    <AppBox>
      {/* Todo의 index.jsx를 가져옴 */}
      <Todo></Todo>

      {/* User은 여기에 입력해 주면 되며, user의 값을 보내면 될 듯 하다... */}
      {/* 회원가입시 유저 입력 창이 필요하기 때문에 라우터가 있어야 될 듯 하다. */}
      {/* 회원가입 구조를 만든 것처럼 유저 회원가입 구조도 만들기! */}

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

