// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

// userDB : 컨테이너에서 store.getState().userDB로 보내줌
const logIn = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  // 둘은 같다. 객채 안에 변수명이 key값으로 정의되고 값이 값으로 정의된다고 한다.
  // payload: { userId : userId, userPw : userPw, userDB : userDB },
  payload: { userId, userPw, userDB },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };

// export const initialize = {userInfo : { userId: "", userName: "" }};
export const initialize = { userId: "", userName: "" };
// 로그인 했을 때 아이디와 이름을 저장하겠다.


export const reducer = (state = initialize, action) => {
  console.log(`userInfo state`);
  // console.log(state);

  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGIN:

      // 나중에 아이디가 있으면 암호화해서 비교하기 위해 아이디를 먼저 찾는다.
      // 아이디가 없는데 암호화하면 처리시간 낭비이기 때문이라고 함
      const tempUser = payload.userDB.find(
        (item) => item.userId === payload.userId
      );

      // 만약 같은 유저 아이디가 있고, 같은 비밀번호라면 암호화해서 비교하면 되겠지
      if (tempUser && tempUser.userPw === payload.userPw) {
        return { userId: tempUser.userId, userName: tempUser.userName };
      } else {
        return state;
      }

    case TYPE.LOGOUT:
      return initialize; //초기화

    default:
      return state;
  }
};
