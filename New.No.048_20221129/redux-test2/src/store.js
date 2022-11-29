import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import {initialize as count1Ini} from './modules/count1';
import {initialize as count2Ini} from './modules/count2';

import {reducer as count1} from './modules/count1'; //리듀서는 함칠때 combines? store의 초기값이랑, 어디어디랑 이름이 같아야 한다..
import {reducer as count2} from './modules/count2';

const store = createStore(combineReducers({count1, count2}), {...count1Ini, ...count2Ini}, composeWithDevTools());

export default store;