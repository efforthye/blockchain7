// ES6 문법(import, export 사용)으로 되어있다. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test';


// 이 것 자체는 거의 건드릴 일이 없다고 한다. 
// 나중에 라우터 구현 시 수정한다고 한다. 
// 방법에 따라서는 라우터 구현 시에도 수정 안할 수 있다고 함.
// root : public의 id가 root인 Element를 가져와서 그 안에 React의 구조를 그리도록 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// 이걸 해줬기 때문에 html의 root안에 App이 온 거라고 한다.
root.render(
  <React.StrictMode>
    {/* HTML 문법을 Javascript와 함께 사용한다. */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
