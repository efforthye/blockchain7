import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { action, counterThunk } from './modules/counter';
import { useState } from 'react';
import loadingImg from './loading.gif';

import styled from 'styled-components'

function App() {

  const dispatch = useDispatch();
  // const count = useSelector(state=>state.count);
  const count = useSelector(state => state.count.value);
  const isLoading = useSelector(state => state.count.isLoading);

  const [inputCount, setCount] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <div className="App">

      <div>{count}</div>



      <div>

        <input type={'number'} placeholder={'input Count'} value={input} onInput={
          ({ target: { value } }) => {
            setInput(value);
          }
        }></input>

      </div>

      <button onClick={() => {
        dispatch(action.increment());
      }}>+</button>
      <button onClick={() => {
        dispatch(action.decrement());
      }}>-</button>


      {/* 
        input : (state, action) =>{
          state.value = action.payload;
        } 
        */}
      <button onClick={() => {
        dispatch(action.input({ count: input }));
      }}>하이</button>

      



      <div>
        <input type={'number'} placeholder={"count"} value={inputCount} onInput={(e) => {
          setCount(e.target.value);
        }}></input>
        <button onClick={() => {
          // counter에서 createAsyncThunk로 정의한 변수는
          // action 함수처럼 사용할 수 있다고 한다...........?ㅠㅠ 
          dispatch(counterThunk(inputCount));
        }}>set count</button>
      </div>

      
      {/* 만약 로딩중이면 Now Loading을 띄운다. */}
      {!isLoading || <LoadingBox></LoadingBox>}

    </div>
  );
}

const LoadingBox = styled.div`
  margin: 0 auto;
  background-image: url(${loadingImg});
  width: 60px;
  height: 60px;
  background-size: contain;
`;

export default App;
