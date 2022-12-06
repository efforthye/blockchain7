import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { action } from './modules/counter';

function App() {

  const dispatch = useDispatch();
  // const count = useSelector(state=>state.count);
  const count = useSelector(state=>state.count.value);


  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=>{
        dispatch(action.increment());
      }}>+</button>
      <button onClick={()=>{
        dispatch(action.decrement());
      }}>-</button>
    </div>
  );
}

export default App;
