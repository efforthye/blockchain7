import { action } from "../../../modules/reducer/userInfo";
import store from "../../../modules/store";
import LogInComponent from "../LogIn/Component";

const LogInContainer = () =>{

    const onClick = (id, pw) =>{
        // 클릭했을 때 dispatch 보낸다. 액션 넣어줄때 state도 보내주면 된다...
        store.dispatch(action.logIn(id, pw, store.getState().userDB));
    }

    return <LogInComponent onClick={onClick} />;
}
export default LogInContainer;