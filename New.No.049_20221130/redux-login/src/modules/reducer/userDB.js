// 회원가입한 유저들의 정보
const TYPE = {
  REGIST: "userDB/regist",
};

// action
// const regist = (userId, userPw, userName) => ({
//   type: TYPE.REGIST,
//   payload: { userId, userPw, userName },
// });

// 8. regist를 호출당했다. userId, userPw, userName을 매개변수로 받았다.
// action
const regist = (userId, userPw, userName) => {
  console.log("8. userDB.js/regist");

  // 9. type과 payload가 들어있는 객체를 반환했다.
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName }
  }
};

export const action = { regist };

export const initialize = { userDB: [] };

// 12. dispatch가 action을 매개변수로 보내며 호출했다.
// state는 기존의 상태값이다(중요), 
// state는 combineReducers의 사용 여부에 따라서 달라진다고 한다..(중요, 이해안댐ㅎ)
// ... 여긴 그럼 언제 들어오는 거? store.dispatch 했을 때 action으로 들어옴
// ... 최종으로 state가 변경되는 곳이 바로 reducer이다.
export const reducer = (state = initialize, action) => {
  console.log("userDB.js/reducer");
  console.log(action);
  const { type, payload } = action;

  // 13. type에 따라서 state를 재정의한다. 재정의하고 싶은 정보를 return한다.
  // 문제는 현재 출력하는 곳이 없다고 함? 모르겠당~
  switch (type) {
    case TYPE.REGIST:
      return state;
    default:
      return state;
  }
};
