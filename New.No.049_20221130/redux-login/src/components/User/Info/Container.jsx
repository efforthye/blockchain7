import { connect } from "react-redux";
import { action } from "../../../modules/reducer/userInfo";
import store from "../../../modules/store";
import InfoComponent from "../Info/Component";

const InfoContainer = ({userName}) =>{
    console.log(userName);
    const onClick = () => {
        store.dispatch(action.logOut());
    };
    return <InfoComponent userName={userName} onClick={onClick} />;
}

const mapStateToProps = (state, props) =>{
    return {
        // store에 넣은 것처럼 다시 빼냄
        userName : state.userInfo.userName,
    }
} 

export default connect(mapStateToProps)(InfoContainer);