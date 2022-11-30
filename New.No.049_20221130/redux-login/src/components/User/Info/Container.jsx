import { connect } from "react-redux";
import InfoComponent from "../Info/Component";

const InfoContainer = ({userName}) =>{
    console.log(userName);
    return <InfoComponent userName={userName} />;
}

const mapStateToProps = (state, props) =>{
    return {
        // store에 넣은 것처럼 다시 빼냄
        userName : state.userInfo.userName,
    }
} 

export default connect(mapStateToProps)(InfoContainer);