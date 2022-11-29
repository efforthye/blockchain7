const reducer = (state = 0, action) => {
    
    console.log(state, action);

    const { type, payload } = action;

    switch (type) {
        // 상태값이름(count1)/명령어(plus) 형식처럼 '/'로 나누면 
        // 앞의 count1이 store 내의 state 자체를 의미하게 된다.
        // reducer가 가져오는 state는 store 내의 count1이 된다.
        case "count1/plus":
            // 객체 안에 기존의 state가 있고 count1을 추가함
            // payload.input : count1프로퍼티에 payload로 받은 input 프로퍼티
            // return { ...state, count1: state.count1 + payload.input }
            // case를 /로 나눠주면 store.js에서 count1 부분만 가져오게 되어서 이렇게 써도 된다.
            return state + payload.input;

        case "count1/minus":
            // 객체 안에 기존의 state가 있고 count1을 추가함
            // payload.input : count1프로퍼티에 payload로 받은 input 프로퍼티
            // return { ...state, count1: state.count1 - payload.input }
            return state - payload.input;

        default:
            return state;
    }
}

export default reducer;