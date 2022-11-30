// 회원가입한 유저들의 정보
const TYPE = {
  REGIST: "userDB/regist",
};

// action
// const regist = (userId, userPw, userName) => ({
//   type: TYPE.REGIST,
//   payload: { userId, userPw, userName },
// });
const regist = (userId, userPw, userName) => {
  console.log("userDB.js/regist");
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName }
  }
};

export const action = { regist };

export const initialize = { userDB: [] };

// 여긴 그럼 언제 들어오는 거? store.dispatch 했을 때 action으로 들어옴
export const reducer = (state = initialize, action) => {
  console.log("userDB.js/reducer");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      return state;
    default:
      return state;
  }
};
