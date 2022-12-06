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
