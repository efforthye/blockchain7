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



// createSlice : actions, reducers 등을 한 번에 생성할 수 있게 해주는 라이브러리
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const promistTime = (count) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(count);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}

export const counterThunk = createAsyncThunk(
    // 매개변수1 : type의 이름
    'count/countThunk',
    // 매개변수2 : reducer를 작성한다.
    async (count) => {
        return await promistTime(count);
    }
);

const counterSlice = createSlice({
    // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.(count/increment가 redux console에 추가됨)
    name: 'count',
    // state의 초기값, 객체로만 작성 가능하다.
    initialState: { value: 0, isLoading: false },
    // state의 reducer를 만든다.
    // 기존의 redux에서의 순수함수와는 달리 value를 직접 수정하는 방법도 가능하다.
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        // input : (state, action) =>{
        //     state.value = action.payload;
        // }
        input : (state, action) =>{
            state.value = action.payload.count;
        }
    },
    // 추가적인 리듀서를 작성한다.
    extraReducers: (builder) => {
        // builder의 addCase를 사용해 각 작업에 대해서 내용을 작성한다.
        builder.addCase(
            // pending : 작업 시작 전에 실행된다(버튼 눌렀을 때)
            counterThunk.pending, (state, action) => {
                state.isLoading = true; // 로딩 시작
            }
        ).addCase(
            // filfilled : reducer가 성공적으로 완료되었을 때 아래 함수가 실행되는 작업이다.(확실x)
            counterThunk.fulfilled,
            (state, action) => {
                state.value = action.payload;
                state.isLoading = false; // 작업 시작(로딩 끝)
            }
        ).addCase(counterThunk.rejected, (state, action) => {
            // rejected : 작업 실패 시 실행된다.
            state.isLoading = 0;

        });
    }
});

// dispatch에 action으로, createSlice로 생성된 actions를 사용한다.
// createSlice : action을 자동으로 만들어주는 함수이다.
export const action = counterSlice.actions;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
export const reducer = counterSlice.reducer;