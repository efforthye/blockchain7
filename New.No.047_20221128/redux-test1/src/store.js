import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(reducer, {count1 : 0}, composeWithDevTools());

// 컴포넌트가 아니기 때문에 store.js로 파일을 만들었다.
// 대문자로 시작하는 파스칼 표기법을 사용하지 않고 카멜 표기법을 사용하였다.
export default store;