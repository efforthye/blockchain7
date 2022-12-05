// redux-thunk : 비동기 처리를 사용하기 위한 미들웨어이다.

// import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { action } from './modules/count';

import { promiseTime } from './modules/promiseTime';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => {

        // dispatch(action)를 통해 store에 action을 보내 reducer처리를 함
        // setTimeout(() => {
        //   dispatch(action.increment());
        // }, 1000);

        // then 메서드를 사용하여 매개변수로 콜백함수를 전달한다.(중요중요ㅠㅠㅠ)
        // 전달된 콜백함수는 매개변수로, Promise의 resolve 결과를 받는다.
        // .then((매개변수)=>{}) 여기서의 매개변수는 action이다.
        promiseTime(action.increment(), 1000).then((data) => {
          dispatch(data);
        }).catch((error) => {
          console.log(error);
        });

      }}>+</button>
      <button onClick={() => {
        setTimeout(() => {
          dispatch(action.decrement());
        }, 1000);
      }}>-</button>
    </div>
  );
}

export default App;
