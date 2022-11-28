// createStore : 이름 그대로 store를 만드는 함수이다. Deprecated됐다.
// Deprecated : 중요도가 떨어져 더이상 사용되지 않고 앞으로 사라지게 될 컴퓨터 시스템 기능 등이다.
// @reduxjs/toolkit 라이브러리의 configureStore() 메서드 : createStore()가 사라지고 나서 대신하게 된 함수이다.
// createStore가 살아난 이유 : 기존의 코드와 사용자들이 너무 많아서 수정을 다 못 한다고 항의했나봄. 
import { createStore } from 'redux';
// composeWithDevTools : 브라우저의 Redux DevTool과 연결해주는 함수이다.
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

// store : state 저장소를 생성한다. (엄청엄청 중요~~ useContext처럼 이곳저곳에서 사용가능한 전역변수같은 느낌임)
// useState를 사용하지 않는 대신 이걸 사용한다고 함. 쓰기는 좀 어려운데 잘 쓰게되면 너무 편할듯?
// createStore() 첫 번째 매개변수 : reducer 함수 전체를 전달, 두 번째 매개변수 : 초기 상태 전달, 세 번째 매개변수 : devtool에 연결한다. (중요)
// 초기 상태 : initialize(), initializeState ..? 금요일에 배웠다고 함
// const store = createStore((state) => state, {test : "하이"}, composeWithDevTools());
// const store = createStore(reducer, {test : "하이"}, composeWithDevTools());
// const store = Store();


// 에러난 코드 : 계속 store를 생성하고 있기 때문에 에러남 밖에 빼 둬야 함..!!!!!
// export default function Store(){
//     return createStore(Reducer, {test : "하이"}, composeWithDevTools());
// }

// 이렇게 변수로 수정해서 export해줬다.
const store = createStore(reducer, {test : "하이"}, composeWithDevTools());
export default store;