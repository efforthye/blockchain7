import { combineReducers } from "redux";
import { reducer as userDB } from "./userDB";
import { reducer as userInfo } from "./userInfo";
import { reducer as board } from "./board";
import { reducer as comment } from "./comment";



// export const reducer = combineReducers({ userDB, userInfo });
export const reducer = combineReducers({ userDB, userInfo, board, comment });
