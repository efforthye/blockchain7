// 회원가입 유저들 정보
const TYPE = {
    REGIST: 'users/regist',
};

// action
const regist = (userId, userPw, userName) => ({
    type: TYPE.REGIST,
    payload: { userId, userPw, userName }
});

// action export
export const action = { regist };

// 초기값
export const initialize = [];

export const reducer = (state = initialize, action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPE.REGIST:
            return state;

        default:
            return state;
    }
}