import store from '../../../modules/store';
import {useDispatch} from 'react-redux';

import RegistComponent from "../Regist/Component";
import { action } from '../../../modules/reducer/userDB';

const RegistContainer = () =>{

    // 컴포넌트에 전해준다.
    const onClick = (userId, userPw, userName) =>{
        console.log("등록 컨테이너 온클릭, 이제 디스패치로 해당 액션 리듀서에 액션 보낸다.")

        // store.dispatch() : 리듀서에게 액션값을 보내줌 ,action.regist() : 타입과 페이로드 설정해줌
        // 액션의 페이로드에 필요한 매개변수를 보내줌(userId, userPw, userName)
        store.dispatch(action.regist(userId, userPw, userName));
    };
    console.log("등록 컨테이너", onclick);

    return <RegistComponent onClick={onClick} />;
}
export default RegistContainer;


// 화살표 함수 사용방법
// () => ({}) << 왼쪽 ()안에 있는 것이 function()의 괄호 안에 있는 것과 같다. 즉 왼쪽 ()안의 것이 매개변수이다.
// hi => (화살표) << 오른쪽은 함수의 return값이다.(현재는 {}, 객체를 반환한다.)
// () => [] << 왼쪽 ()는 받는 매개변수이다. 오른쪽은 함수가 return하는 []배열이다.
// () => {} << 왼쪽 ()는 받는 매개변수이다. 오른쪽 {}중괄호는 함수의 내용이다. 
// () => { return {} } << 왼쪽 ()는 받는 매개변수이다. 오른쪽 {}는 함수의 내용이며, return 다음의 {}, 객체를 반환한다.
// () => ({a : 1}) == () => {return {a : a};} == function(){ return {a : 1}; }
// () => [] == () => { return []; }
// (a) => { return a + 1; } == function(a){return a + 1;}