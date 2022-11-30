import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { reducer as userInfoReducer } from './userInfo';


const store = createStore((state)=>state, {}, composeWithDevTools());

export default store;