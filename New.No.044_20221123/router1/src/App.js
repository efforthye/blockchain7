import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Log from './components/Log';

function App() {

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <Header />
      
      {/* Routes : 라우터를 나누기 위해서는 Routes 컴포넌트로 묶어야 한다. */}
      <Routes>
        {/* Route : 각 라우터에 대한 구현이다. */}
        {/* path : 라우터의 주소, element는 출력할 엘리먼트(컴포넌트 포함)이다. */}
        {/* '/'를 넣으면 절대경로가 되는 것이고, 안 넣으면 상대 경로가 된다고 한다. */}
        {/* 넣어도 상관 없는데 일단은 상대경로가 더 편해서 비워 뒀다고 한다. */}
        <Route path='' element={<Home propsNum={num}  />} />
        <Route path='/login' element={<Login />} />

        {/* '/*' : log로 시작했으면 어디든 log로 가라는 뜻 */}
        <Route path='log/*' element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
