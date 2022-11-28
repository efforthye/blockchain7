// createStore : 이름 그대로 store를 만드는 함수이다. Deprecated됐다.
// Deprecated : 중요도가 떨어져 더이상 사용되지 않고 앞으로 사라지게 될 컴퓨터 시스템 기능 등이다.
// @reduxjs/toolkit 라이브러리의 configureStore() 메서드 : createStore()가 사라지고 나서 대신하게 된 함수이다.
// createStore가 살아난 이유 : 기존의 코드와 사용자들이 너무 많아서 수정을 다 못 한다고 항의했나봄. 
import { createStore } from 'redux';
// Provider : React에서 Redux를 사용하기 위한 Root컴포넌트를 가져오는 친구이다.
import { Provider } from 'react-redux';
// composeWithDevTools : 브라우저의 Redux DevTool과 연결해주는 함수이다.
import { composeWithDevTools } from 'redux-devtools-extension';

import logo from './logo.svg';
import './App.css';

// reducer 함수는 Redux 내에서 dispatch가 보내준 action을 받아 
// 작업을 진행한 후 state를 변경(재정의)한다....(중요한듯?)
// dispatch가 보내준 action 내에는 type과 payload가 있다고 한다.
const reducer = (state, action) =>{
  console.log(state, action);

  // action의 type이 plus일 경우 기존의 state에 1을 추가한다.
  // 리턴된 값은 state에 그대로 정의된다.
  switch(action.type){
    case "plus" :
      return { test : state.test+"1" };
    default :
      return state;
  }

}

// store : state 저장소를 생성한다. (엄청엄청 중요~~ useContext처럼 이곳저곳에서 사용가능한 전역변수같은 느낌임)
// useState를 사용하지 않는 대신 이걸 사용한다고 함. 쓰기는 좀 어려운데 잘 쓰게되면 너무 편할듯?
// createStore() 첫 번째 매개변수 : reducer 함수 전체를 전달, 두 번째 매개변수 : 초기 상태 전달, 세 번째 매개변수 : devtool에 연결한다. (중요)
// 초기 상태 : initialize(), initializeState ..? 금요일에 배웠다고 함
// const store = createStore((state) => state, {test : "하이"}, composeWithDevTools());
const store = createStore(reducer, {test : "하이"}, composeWithDevTools());


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
        }}>+</button>
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

