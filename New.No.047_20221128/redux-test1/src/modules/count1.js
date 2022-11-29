// action에서 사용할 type을 미리 정의해 준다.
const TYPE = {
    PLUS: 'count1/plus',
    MINUS: 'count1/minus',
    INPUT: 'count1/input'
}

// plus에 대한 action
const plus = {
    type: TYPE.PLUS
}
// minus에 대한 action
const minus = {
    type: TYPE.MINUS
}
// input에 대한 action을 return하는 함수
const input = (input) => ({
    type: TYPE.INPUT,
    payload: { input }
});

// action을 정의해준다...
export const action = {plus, minus, input};

const initialize = { count1: 0 };

const reducer = (state=0, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.PLUS:
            return state + 1;
        case TYPE.MINUS:
            return state - 1;
        case TYPE.INPUT:
            return payload.input;
        default:
            return state;
    }
}