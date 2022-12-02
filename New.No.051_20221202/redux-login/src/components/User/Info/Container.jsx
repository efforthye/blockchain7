import { connect, useSelector } from "react-redux";
import { action } from "../../../modules/reducer/userInfo";
import store from "../../../modules/store";
import InfoComponent from "../Info/Component";
import axios from "axios";

const InfoContainer = ({userName}) =>{
    console.log(userName);
    const userId = useSelector(state => state.userInfo.userId);

    const onClick = () => {
        store.dispatch(action.logOut());

        // 해당 유저 아이디를 useSelector으로 받아와 요청보냄
        axios.post("http://localhost:8080/api/user/logout", {
            userId
        });
    };
    return <InfoComponent userName={userName} onClick={onClick} />;
}

const mapStateToProps = (state, props) =>{
    return {
        // store에 넣은 것처럼 다시 빼냄
        userName : state.userInfo.userName,
        // userId : state.userInfo.userId,
    }
} 

export default connect(mapStateToProps)(InfoContainer);