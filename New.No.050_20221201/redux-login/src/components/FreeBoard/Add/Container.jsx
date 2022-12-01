import AddComponent from "./Component";
import {useDispatch, useSelector} from "react-redux";
import { action } from "../../../modules/reducer/board";

const AddContainer = () =>{

    // connect를 사용할 필요 없다.(중요), state = store
    const userName = useSelector((state) => state.userInfo.userName);

    // dispatch()만 하면 된다.
    const dispatch = useDispatch();

    // title, text, userName
    const onClick = (title, text) =>{
        dispatch(action.add(title, text, userName))
    }

    // 로그인 안하면 add가 사라진다.(오호;;)
    // return !userName || (
    //     <AddComponent onClick={onClick}/>
    // )
 return   <AddComponent onClick={onClick}/>
}

export default AddContainer;