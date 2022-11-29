// state의 대체값을 0으로 정의했다. 값을 주지 않으면 오류가 발생한다고 한다. 이유? : 
// 매개변수로 전달된 state가 없으면 state는 0으로 정의된다..
const reducer = (state = 0, action) => {

    const { type } = action;

    switch (type) {
        case "count2/plus":
            // 객체 안에 기존의 state가 있고 count2을 추가함
            // payload.input : count2프로퍼티에 payload로 받은 input 프로퍼티
            return state + 1;

        case "count2/minus":
            // 객체 안에 기존의 state가 있고 count1을 추가함
            // payload.input : count2프로퍼티에 payload로 받은 input 프로퍼티
            return state - 1;

        default:
            return state;
    }
}

export default reducer;