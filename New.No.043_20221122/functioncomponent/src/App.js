import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import EffectTest from './components/EffectTest';

// 함수형 컴포넌트는 생명주기가 약간 다르다.
// 함수형 컴포넌트는 mount, update 시에 해당함수 자체를 다시 호출한다.
// 클래스형 컴포넌트와 같이 state, life-cycle 메서드들을 사용하듯 구현하려면 
// Hook 메서드들을 사용해야 한다.
// Hook 메서드로는 useState, useEffect, useRef, useCallback, useMemo가 있다.
// useContext와 useReducer도 있지만 해당 내용은 Redux에서 다시 공부
// useEffect, useCallback, useMemo의 경우 상황에 따라 필요한 코드만 실행시키기 위해 사용.
function App() {
  // mount, update 시에 항상 app이 콘솔에 출력된다.
  console.log("app");

  let num1 = 0;
  const [num, setNum] = useState(0);
  const [name, setName] = useState("이재혁");


  const increase = () => {
    num1 = num1+1;
    setNum(num+1);
    console.log(num1);
  }


  return (
    <div className="App">
      {/* <List /> */}
      {/* <div onClick={increase}>{num}</div> */}
      <EffectTest />
    </div>
  );
}

export default App;
