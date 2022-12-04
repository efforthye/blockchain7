// 게시글에 대한 정보
const TYPE = {
  REGIST : 'board/regist',
  UPDATE : 'board/update',
  DELETE : 'board/delete',
}

// 액션
const regist = (userId, userName, title, context, createdAt) =>{
  console.log("액션"+userId, userName, title, context, createdAt);
  return {  
    type : TYPE.REGIST,
    payload : {userId, userName, title, context, createdAt}
  }
}
export const action = {regist};


// 초기값 설정...
export const initialize = { boardDB: [] };

// 게시판 번호
let boardNum = 0;

// 조회수, 추천수도 나중에 추가



// 값(type, payload)을 받아 처리함 : return값이 state가 됨
export const reducer = (state = [], action) =>{
  // console.log(`boardDB state`);
  // console.log(state);
  const {type, payload} = action;
  switch (type) {
    // 만약 등록이면.. 값을 store에 저장?
    case TYPE.REGIST:
      boardNum++;

      console.log({...payload, boardNum});
      return [{...payload, boardNum}, ...state]; //최신값을 앞에 출력
  
    default:
      return state;
  }
}





// // 12. dispatch가 action을 매개변수로 보내며 호출했다.
// // state는 기존의 상태값이다(중요), 
// // state는 combineReducers의 사용 여부에 따라서 달라진다고 한다..(중요, 이해안댐ㅎ)
// // ... 여긴 그럼 언제 들어오는 거? store.dispatch 했을 때 action으로 들어옴
// // ... 최종으로 state가 변경되는 곳이 바로 reducer이다.
// export const reducer = (state = initialize, action) => {
//   console.log("userDB.js/reducer");
//   console.log(action);
//   const { type, payload } = action;
//   console.log(state); // 위에서 정의해준 배열이므로 배열을 리턴해주면 된다.

//   // 13. type에 따라서 state를 재정의한다. 재정의하고 싶은 정보를 return한다.
//   // 문제는 현재 출력하는 곳이 없다고 함? 모르겠당~
//   switch (type) {
//     case TYPE.REGIST:
//       // 이 곳에 예외처리 등의 작업을 해준다.
//       // 만약 state에 동일한 아이디가 있으면 리턴 state 해준다.
//       if(state.find(item=>item.userId === payload.userId)){
//         alert("중복된 아이디입니다.");
//         return state;
//       }else{
//         // 이제 state가 변경되어 redux에서 확인가능
//         return [...state, payload];
//       }
//     default:
//       return state;
//   }
// };