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


const asyncIncrement = () => {
    // 2. 사용자 클릭으로 dispatch(action.asyncIncrement()) 호출로 인해 asyncIncrement()가 호출된다.
    console.log("2. count.js / asyncIncrement()");

    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    // 3. thunk에서 해당 함수를 호출한다. action이 객체일 경우엔 reducer에 매개변수로 전달하며 호출한다.
    console.log("3. count.js / asyncIncrement() return function()")
    return async (dispatch, getState) => {

        // await를 사용한 함수의 호출에서 에러가 발생할 수 있기 때문에 try~catch 구문을 사용한다.
        try {
            // 4. promiseTime() 함수를 호출하고 끝나기를 기다려서 result에 결과(resolve)를 정의한다.
            console.log("4. count.js / asyncIncrement() / return function() / promiseTime() 호출");
            const result = await promiseTime(TYPE.INCREMENT, 1);

            // 7. result를 받아서 dispatch를 호출해 action으로 전달한다. -> count.js / reducer
            console.log(`7. result = ${result}`);
            dispatch({ type: result });
        } catch (error) {
            dispatch({ type: "error", payload: error });
        }
    }
}
const asyncDecrement = () => {
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    return async (dispatch, getState) => {
        try {
            // return await promiseTime(TYPE.DECREMENT, 1); : state에 적용되지 않는다.
            const result = await promiseTime(TYPE.DECREMENT, 1);
            dispatch({ type: result });
        } catch (error) {
            dispatch({ type: "error", payload: error });
        }
    }
}

export const action = { increment, decrement, asyncIncrement, asyncDecrement };

export const initialize = 0;

export const reducer = (state = initialize, action) => {
    // 8. 7번에서 호출한 dispatch의 action은 객체이기 때문에 reducer가 호출된다.
    console.log(`8. reducer ${action}`);

    // 9. type에 따라서 코드를 분류하여 처리한다.
    const { type, payload } = action;

    switch (type) {
        // 9-1. 현재는 increment를 호출중이다.
        case TYPE.INCREMENT:
            // 10. return 된 state + 1을 state(현재는 count)에 적용한다.
            return state + 1;

        case TYPE.DECREMENT:
            return state - 1;

        default:
            return state;
    }

}