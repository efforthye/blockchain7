// 로그인 유저 정보
const TYPE = {
    LOGIN: 'user/logIn',
    LOGOUT: 'user/logOut'
};

// 로그인/로그아웃 액션 export
const logIn = (userId, userPw) => ({
    type: TYPE.LOGIN,
    payload: { userId, userPw }
});
const logOut = () => ({
    type: TYPE.LOGOUT,
});
export const action = { logIn, logOut };

// 초기값 세팅(로그인시 무엇을 저장할 것인지 설정한다.-> 아이디, 이름)
export const initialize = { userId: "", userName: "" };

// 리듀서 만들기
export const reducer = (state = initialize, action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPE.LOGIN:
            return state;

        case TYPE.LOGOUT:
            return state;
            
        default:
            break;
    }

}