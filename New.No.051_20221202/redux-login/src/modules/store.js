import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userInfoIni } from "./reducer/userInfo";
import { initialize as userDBIni } from "./reducer/userDB";
import { initialize as boardInit } from "./reducer/board";
import { reducer } from "./reducer";

const store = createStore(
  reducer,
  // 이 초기값의 key값이 index.js의 컴바인 리듀서들 이름과 같아야 한다.
  { userInfo: userInfoIni, ...userDBIni, board : boardInit },
  composeWithDevTools()
);

export default store;
