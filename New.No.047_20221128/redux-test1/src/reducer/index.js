// combineReducers() 메서드 : 전달받은 reducer의 모음 객체를 하나로 묶어준다.
import {combineReducers} from 'redux';

import count1 from './count1';
import count2 from './count2';
import array from './array';

// combineReducers() 메서드는 하나로 통합된 reducer 메서드를 반환한다.
export default combineReducers({count1, count2, array});