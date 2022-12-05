// redux-thunk : 비동기 처리를 사용하기 위한 미들웨어이다.

// import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { action } from './modules/count';

import promiseTime from './modules/promiseTime';

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
        // 1초뒤에 1을 늘린다.
        promiseTime(action.increment(), 1).then((data) => {
          dispatch(data);
        }); //.catch()는 지워버렸다.

      }}>+</button>
      <button onClick={async () => {
        // 1초간 기다린 후에 액션(temp)을 받아서 dispatch에 액션(temp)을 전달한다.
        const temp = await promiseTime(action.decrement(), 1);
        dispatch(temp);
        // 이렇게 작성하면 오류가 발생한다.
        // 왜냐면 dispatch에 전달하는 매개변수는 기본적으로 객체{} 형식의 action만 가능하기 때문이다.
        // action에서 비동기 처리를 할 수 있도록 중간 과정을 추가하는 것이 redux-thunk이다.
        // 중간 과정으로 promise, axios 등을 처리할 수 있도록 async, await를 사용할 수 있게 추가해준다.(중요)
        // const temp = dispatch(await promiseTime(action.decrement(), 1));
      }}>-</button>

      {/* thunk promise */}
      <button onClick={() => {
        dispatch(action.asyncIncrement());
      }}>thunk+</button>
      <button onClick={() => {
        dispatch(action.asyncDecrement());
      }}>thunk-</button>
    </div>
  );
}

export default App;
