import store from '../../../modules/store';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

import RegistComponent from "../Regist/Component";
import { action } from '../../../modules/reducer/userDB';

const RegistContainer = () =>{
    
    const navigate = useNavigate();

    // 1. onClick을 선언한다.
    // 컴포넌트에 전해준다.
    const onClick = (userId, userPw, userName) =>{

        // 5. onClick을 호출당했다. 매개변수로 userId, userPw, userName를 받았다.
        console.log("5. 등록 컨테이너 온클릭, 6. 이제 디스패치로 해당 액션 리듀서에 액션 보낸다.")

        // 6. store의 dispatch를 호출했다. 매개변수로 action의 regist를 호출해 리턴값을 전달했다.
        // -> 즉 dispatch 호출보다 action의 regist 호출이 먼저 실행된다.
        // 6-1. action의 regist를 호출했다. userId, userPw, userName을 매개변수로 전달했다.
        // 10. dispatch를 호출했다. action.regist의 return값(action)을 매개변수로 전달했다.
        // 11. dispatch는 reducer를 호출하며 action을 전달한다.
        // ... store.dispatch() : 리듀서에게 액션값을 보내줌 ,action.regist() : 타입과 페이로드 설정해줌
        // ... 액션의 페이로드에 필요한 매개변수를 보내줌(userId, userPw, userName)
        store.dispatch(action.regist(userId, userPw, userName));

        navigate("/");

    };

    console.log("1. 등록 컨테이너", onclick);

    // 2. onClick을 RegistComponent에 props로 전달한다.
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