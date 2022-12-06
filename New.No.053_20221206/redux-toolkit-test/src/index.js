import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// default이면 그냥 가져오고, 아니면 {}안에 넣어서 가져옴(중요)
import {store} from './modules/store';

// yarn add @reduxjs/toolkit
// @reduxjs/toolkit란
// - redux toolkit이라고 많이 부른다.
// - redux 라이브러리의 새로운 버전이다.
// 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// # react의 로딩창 (중요)
// - 스피너라고 하는 형태로 많이 구현된다.
//   해당 형태는 원이 빙글빙글 도는 애니메이션이다.
// - react에서 스피너 또는 로딩창 구현 시 suspense, lazy 정도를 사용한다.