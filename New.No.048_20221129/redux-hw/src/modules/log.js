// 로그인에 필요한 기본 정보같은 것들을 미리 정의해주자.
const TYPE = {
    LOGIN: 'user/login',
    LOGOUT: 'user/logout',
}

// 인풋 여러개 받고 여러개 출력하도록 수정하면 될듯(name, id, pw)
// ({받는값..?}) 
// 컴포넌트에서 regist매개변수로 받아오고(매개변수는 컨테이너 connect를통해넣음) regist(보내준값)
const regist = (name, id, pw) => ({
    type: TYPE.REGIST,
    payload: { name : name, id : id, pw : pw }
});

// 액션
const login = (id, pw) => ({
    type : TYPE.LOGIN,
    payload : {id : id, pw : pw}
});
const logout = () => ({
    type : TYPE.LOGOUT
});
export const action = { login, logout }

export const initialize = false;   //user 초기값을 정의해준다.

export const reducer = (state={user:[]}, action) => {   //리듀서를 만들어준다.(Reducer : 선택지를 줄이는..?), 그리고 state 초기값을 설정해줌
    const { type, payload } = action;
    switch (type) {
        case 'user/regist':
            console.log(payload);
            return {user : [...state.user, payload]};
        default:
            return state;
    }
}




































// const TYPE = {
//     PLUS: 'count1/plus',
//     MINUS: 'count1/minus',
//     INPUT: 'count1/input'
// }
// const plus = {
//     type: TYPE.PLUS
// }
// const minus = {
//     type: TYPE.MINUS
// }
// const input = (input) => ({     // input에 대한 action을 return하는 함수
//     type: TYPE.INPUT,
//     payload: { input }
// });
// export const action = { plus, minus, input };
// export const initialize = { count1: 0 };   //초기값을 정의해준다.
// export const reducer = (state = 0, action) => {   //리듀서를 만들어준다.(Reducer : 선택지를 줄이는..?), 그리고 state 초기값을 설정해줌
//     const { type, payload } = action;
//     switch (type) {
//         case TYPE.PLUS:
//             return state + 1;
//         case TYPE.MINUS:
//             return state - 1;
//         case TYPE.INPUT:
//             return payload.input;
//         default:
//             return state;
//     }
// }