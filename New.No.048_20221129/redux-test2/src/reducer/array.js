const reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case "array/add":
            console.log([...state, payload.input]);
            return [...state, payload.input];
        case "array/remove":
            // const sliceValue = state.indexOf(payload.input);
            // return state.slice(sliceValue-1, sliceValue);

            let newState = state.filter(function(elem){
                return elem !== payload.input;
            });
            return newState;

        default:
            return state;
    }

}

export default reducer;