// import는 무조건 다른 코드들보다 위에 있어야 한다. 중간에 const같은 것이 끼어서는 안됨
// 설치된 라이브러리
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// 개발자가 작성한 코드
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
