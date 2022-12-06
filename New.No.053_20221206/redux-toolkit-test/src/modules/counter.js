// const TYPE = {
//     INCREMENT: 'counter/increment',
//     DECRIMENT: 'counter/decrement'
// }

// const increment = () => ({
//     type: TYPE.INCREMENT,
//     payload: ""
// });
// const decrement = () => ({
//     type: TYPE.DECRIMENT,
//     payload: ""
// });
// export const action = { increment, decrement };

// export const initialize = 0;

// export const reducer = (state = initialize, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case TYPE.INCREMENT:
//             return state + 1;

//         case TYPE.DECRIMENT:
//             return state - 1;

//         default:
//             return state;
//     }
// }



// 뭐 하는 라이브러리? : 
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // state의 이름
    name : 'count',
    // state의 초기값, 객체로만 작성 가능하다.
    initialState : {value : 0},
    // state의 reducer를 만든다.
    // 기존의 redux에서의 순수함수와는 달리 value를 직접 수정하는 방법도 가능하다.
    reducers : {
        increment : (state)=> {state.value += 1},
        decrement : (state)=> {state.value -= 1},
    }
});

export const action = counterSlice.actions;
export const reducer = counterSlice.reducer;