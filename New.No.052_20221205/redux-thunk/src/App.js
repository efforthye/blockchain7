// redux-thunk : 비동기 처리를 사용하기 위한 미들웨어이다.
// 비동기 처리 : https://www.daleseo.com/js-async-callback/



// import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import {action} from './modules/count';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=>{
        // dispatch(action)를 통해 store에 action을 보내 reducer처리를 함
        dispatch(action.increment());
      }}>+</button>
      <button onClick={()=>{
        dispatch(action.decrement());
      }}>-</button>
    </div>
  );
}

export default App;
