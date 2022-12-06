// import {createStore ,combineReducers} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { initialize, reducer } from './counter';
// const store = createStore(combineReducers({count : reducer}), {count : initialize}, composeWithDevTools());
// export default store;


// toolkit 사용시 createStore가 아닌 configureStore를 사용한다.
// createStore와 마찬가지로 store(리듀서, 초기값, 미들웨어)를 리턴한다.
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {reducer} from './counter';

export const store = configureStore({
    reducer : {count : reducer}, 
    // getDefaultMiddleware는 기본 미들 웨어를 가져오는 함수이다.
    // - redux toolkit는 기본적으로 'redux-devtools-extension' 라이브러리와 'redux-thunk'라이브러리를 지원한다.
    // 미들웨어 추가시 아래 코드 사용하면 된다.
    // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware()],
})