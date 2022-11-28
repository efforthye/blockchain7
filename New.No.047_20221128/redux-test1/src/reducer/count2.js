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