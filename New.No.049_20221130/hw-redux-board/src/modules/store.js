import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userInfoIni } from "./reducer/userInfo";
import { initialize as userDBIni } from "./reducer/userDB";
import { initialize as boardDBIni } from "./reducer/boardDB";
import { reducer } from "./reducer";

const store = createStore(
  reducer,
  // 초기값 여기에 추가추가(보드..)
  // { userInfo: userInfoIni, ...userDBIni, boardInfo : boardDBIni},
  { userInfo: userInfoIni, ...userDBIni, ...boardDBIni},
  composeWithDevTools()
);

export default store;
