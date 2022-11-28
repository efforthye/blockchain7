const reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "inputPlus":
            // 객체 안에 기존의 state가 있고 count1을 추가함
            // payload.input : count1프로퍼티에 payload로 받은 input 프로퍼티
            return { ...state, count1: state.count1 + payload.input }

        case "inputMinus":
            // 객체 안에 기존의 state가 있고 count1을 추가함
            // payload.input : count1프로퍼티에 payload로 받은 input 프로퍼티
            return { ...state, count1: state.count1 - payload.input }

        default:
            return state;
    }
}

export default reducer;