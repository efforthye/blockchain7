import logo from './logo.svg';
import './App.css';

import store from './store';
import { useState } from 'react';

function App() {

  // 인풋 입력값 저장
  const [inputCount, setCount] = useState(0);
  // 배열 인풋 입력값 저장
  const [arrInputValue, setArrInputValue] = useState("");

  return (
    <div className="App">

      {/* state가 변경되지 않아도 나오도록 하려면? */}
      <div>count1 : {store.getState().count1}</div>
      <div>count2 : {store.getState().count2}</div>

      <input type={'number'} placeholder={"더할 숫자 입력"} value={inputCount} onInput={(e) => {
        setCount(+e.target.value);
      }}></input>
      <button onClick={() => {
        store.dispatch({ type: "count1/plus", payload: { input: inputCount } });
      }}>+</button>
      <button onClick={() => {
        store.dispatch({ type: "count1/minus", payload: { input: inputCount } });
      }}>-</button>
      <div></div>
      <button onClick={() => {
        store.dispatch({ type: "count2/plus", payload: {} });
      }}>+</button>
      <button onClick={() => {
        store.dispatch({ type: "count2/minus", payload: {} });
      }}>-</button>

      <div>
        {/* 배열에서 꺼내올 값 */}
      </div>
      <input type={'text'} placeholder={'배열에추가할것'} value={arrInputValue} onInput={(e) => {
        setArrInputValue(e.target.value);
      }}></input>
      <button onClick={() => {
        store.dispatch({ type: "array/add", payload: { input: arrInputValue } });
      }}>배열에 추가</button>
      <button onClick={() => {
        store.dispatch({ type: "array/remove", payload: { input: arrInputValue } });
      }}>배열에서 삭제</button>
      <button onClick={()=>{
        console.log(store.getState().array);
      }}>배열 값 확인</button>

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
  );
}

export default App;
