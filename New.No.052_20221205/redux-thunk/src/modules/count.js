import promiseTime from "./promiseTime";


const TYPE = {
    INCREMENT: 'count/increment',
    DECREMENT: 'count/decrement'
}

const increment = () => {
    return {
        type: TYPE.INCREMENT,
        payload: {},
    }
}

const decrement = () => {
    return {
        type: TYPE.DECREMENT,
        payload: {},
    }
}

// 기존의 redux 실행 순서
// 1. dispatch(action)를 호출한다. 해당 action(무조건 객체)은 reducer에 전달된다.
// 2. dispatch가 호출되면 reducer를 자동으로 호출한다.
// 3. reducer는 state와 action 매개변수를 받아 처리한다.
// 4. reducer의 return값은 그대로 state에 정의된다.
// 5. useSelector를 사용하면 state 변화 시 랜더링을 다시 해준다.(중요, reRendering)
// 순서 총괄 : action -> dispatch -> reducer -> state


// thunk 사용시 redux 실행 순서
// 1. dispatch(action)를 호출한다. 
// 2. action이 함수인지 확인(thunk가 확인함)하여 함수라면 action 함수 자체를 호출한다.
//   (바로 reducer에 전달하지 않음, action 함수는 async, await가 가능하다.(중요))
// 3. action이 객체인 경우 기존의 redux 실행 순서와 마찬가지로 작동한다.
// 순서 총괄 : action -> dispatch -> action function -> dispatch -> reducer


const asyncIncrement = () =>{
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    return async(dispatch, getState) =>{
        try {
            const result = await promiseTime(TYPE.INCREMENT, 1);
            dispatch({type : result});
        } catch (error) {
            dispatch({type : "error", payload : error});
        }
    }
}
const asyncDecrement = () =>{
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    return async(dispatch, getState) =>{
        try {
            // return await promiseTime(TYPE.DECREMENT, 1); : state에 적용되지 않는다.
            const result = await promiseTime(TYPE.DECREMENT, 1);
            dispatch({type : result});
        } catch (error) {
            dispatch({type : "error", payload : error});
        }
    }
}

export const action = { increment, decrement, asyncIncrement, asyncDecrement };

export const initialize = 0;

export const reducer = (state = initialize, action) => {

    // const { type, payload } = action;
    const { type } = action;

    switch (type) {
        case TYPE.INCREMENT:
                return state + 1;

        case TYPE.DECREMENT:
            return state - 1;

        default:
            return state;
    }

}