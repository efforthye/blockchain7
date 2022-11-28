// createStore : 이름 그대로 store를 만드는 함수이다. Deprecated됐다.
// Deprecated : 중요도가 떨어져 더이상 사용되지 않고 앞으로 사라지게 될 컴퓨터 시스템 기능 등이다.
// @reduxjs/toolkit 라이브러리의 configureStore() 메서드 : createStore()가 사라지고 나서 대신하게 된 함수이다.
// createStore가 살아난 이유 : 기존의 코드와 사용자들이 너무 많아서 수정을 다 못 한다고 항의했나봄. 
// import { createStore } from 'redux';
// Provider : React에서 Redux를 사용하기 위한 Root컴포넌트를 가져오는 친구이다.
import { Provider } from 'react-redux';
// composeWithDevTools : 브라우저의 Redux DevTool과 연결해주는 함수이다.
// import { composeWithDevTools } from 'redux-devtools-extension';

import logo from './logo.svg';
import './App.css';

import store from './components/store';

function App() {

  let a = 1;
  let b = 2;
  const add = (a, b)=>{
    return a + b;
  }
  // 함수 자체가 콘솔로그에 출력된다고 한다.
  console.log(add);

  // 이렇게 해도 되는 것처럼..
  const hi = ()=>{
    console.log("하이~");
  };
  setTimeout(hi, 1000);


  return (
    // Provider : Redux를 사용하기 위해 Root 컴포넌트로 전체를 감싸준다. (기존의 Root 컴포넌트는 Provider의 자식 컴포넌트가 됨)
    // Provider의 props로 store를 전달한다.(중요중요)... 전달하는 이유? : 
    <Provider store={store}>
      <div className="App">
        <button onClick={()=>{
          // dispatch() 메서드를 사용해서 action(객체)을 reducer에 전달한다.
          // dispatch : action을 reducer에 전달한다~~
          store.dispatch({type : 'plus', payload:{} });
          
        }}>+1</button>
        <button onClick={()=>{
          store.dispatch({type : 'plus2', payload:{}});
        }}>+2</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;

// 동사무소에 주민등록등본을 신청하러 갔다. : dispatch를 사용해 action의 type으로 주민등록등본을 보냈다.
// 주민등록증과 500원을 제출했다. : dispatch를 사용해 payload의 pay로 500을 포함하며 idCard로 true를 포함했다.(reducer는 dispatch가 보낸 action을 받았다.)
// 직원이 주민등록등본을 찾아 출력한다. : reducer는 받은 action을 기준으로 작업을 실행했다. 주민임을 확인하기 위해 idCard를 받은것을 확인했다. 500원은 수수료로 챙겼다.
// 직원이 출력된 주민등록등본을 나에게 줬다. : state에 주민등록등본이 정의되었으며, 해당 내용은 View(컴포넌트)에서 받아 확인했다.....

