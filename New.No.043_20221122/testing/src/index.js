import React from 'react';
import ReactDOM from 'react-dom/client'; // React와 외부를 연결하는 라이브러리
import './index.css';
import App from './App'; // 컴포넌트를 가져온다.
import reportWebVitals from './reportWebVitals'; // 성능 측정용 파일이라고 한다.

// document.getElementById : 아이디를 기준으로 엘리먼트를 가져온다.(testing/public/index.html에서)
// Virtual DOM의 시작점이 필요하기 때문에
// root 엘리먼트를 가져와서 React의 Root DOM을 만든다.(외부와 연결해주는 컴포넌트)
// React의 장점은 코드의 재활용이 쉽다는 것이라고 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React의 Root DOM에 매개변수로 전달된 컴포넌트를 생성한다.(Mount)
// 이 놈은 root DOM에 출력하는 놈이다. testing/public/index.html의 root에 그려준다.
// 후에 라우터를 하게될 텐데 그 때 건드릴 것이다.
root.render(
  // React.StrictMode를 사용하면 콘솔이 두번 출력되는 이유 :
  // 정확하게 출력하기 위해서 생성할 때 한 번 삭제 후에 다시 생성한다.
  // 뭔 말이냐면 : mount -> unMount -> mount 해서 확실하게 변경시킨다.
  // 추가 설명은 나중에 Redux를 배울 때 설명해준다고 한다.
  // Redux : useContext, useReducer, StrictMode
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
