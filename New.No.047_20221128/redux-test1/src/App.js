import logo from './logo.svg';
import './App.css';

import store from './store';
import { useState } from 'react';

function App() {

  // 인풋 입력값 저장
  const [inputCount, setCount] = useState(0);

  return (
    <div className="App">
      <input type={'number'} placeholder={"더할 숫자 입력"} value={inputCount} onInput={(e)=>{
        setCount(+e.target.value);
      }}></input>
      <button onClick={()=>{
        store.dispatch({type : "inputPlus", payload : {input : inputCount}});
      }}>+</button>
      <button onClick={()=>{
        store.dispatch({type : "inputMinus", payload : {input : inputCount}});
      }}>-</button>
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
