import Login from "../components/Login";
import { connect } from "react-redux";

const LoginContainer = () => {
    return <Login/>;
};

// 상위 컴포넌트(App.js)에서 보낸 props 전체를 받아 현재 상태(store)에 추가해준다.
const mapStateToProps = (state, props) => {
    // 객체 내의 값이 그대로 props에 전달된다고 한다.
    // return { user: state, ...props };
    return state;
}

// dispatch : store의 dispatch() 메서드
const mapDispatchToProps = (dispatch) => {
    return {
        // 내용들..
        // regist: (name, id, pw) => {
        //     dispatch(action.regist(name, id, pw));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);