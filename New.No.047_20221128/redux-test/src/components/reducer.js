// reducer 함수는 Redux 내에서 dispatch가 보내준 action을 받아 
// 작업을 진행한 후 state를 변경(재정의)한다....(중요한듯?)
// dispatch가 보내준 action 내에는 type과 payload가 있다고 한다.
// const reducer = (state, action) => {
//     console.log(state, action);
//     console.log("state : " + state);
//     console.log("action : " + action);

//     // action의 type이 plus일 경우 기존의 state에 1을 추가한다.
//     // 리턴된 값은 state에 그대로 정의된다.
//     switch (action.type) {
//         case "plus":
//             return { test: state.test + "1" };
//         case "plus2":
//             return { test: state.test + "2" };
//         default:
//             return state;
//     }

// }

// 컴포넌트가 아니니까 소문자로 바꾸기
export default function reducer(state, action){

    switch (action.type) {
        case "plus":
            console.log(state.test+"1");
            return { test: state.test + "1" };
        case "plus2":
            console.log(state.test+"2");
            return { test: state.test + "2" };
        default:
            return state;
    }

}