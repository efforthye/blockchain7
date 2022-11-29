import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { reducer as registReducer } from './modules/regist';
import {initialize as registInit} from './modules/regist';
// const store = createStore(combineReducers(registReducer), {...registInitialize}, composeWithDevTools());

// 해당타입처리방법(리듀서), 초기값설정, 리둑스툴연결
const store = createStore(registReducer, {...registInit}, composeWithDevTools());
export default store;