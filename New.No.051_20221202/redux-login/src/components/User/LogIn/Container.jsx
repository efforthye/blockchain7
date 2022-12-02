// 라우터 설정
import { useEffect } from "react";
import { connect } from "react-redux";

// 라우터2 : useNavigate() 메서드를 사용하기 위해 가져옴
import { useNavigate } from "react-router-dom";

import { action } from "../../../modules/reducer/userInfo";
import store from "../../../modules/store";
import LogInComponent from "../LogIn/Component";

// 요청
import axios from 'axios';

// 라우터 설정을 위해 유저이름 받아옴
const LogInContainer = ({userName}) =>{

    // 라우터2 
    // useNavigate() : location.href() 같은 훅이다.
    const navigate = useNavigate();

    const onClick = (userId, userPw) =>{
        // 클릭했을 때 dispatch 보낸다. 액션 넣어줄때 state도 보내주면 된다...
        store.dispatch(action.logIn(userId, userPw, store.getState().userDB));

        // 요청
        axios.post("http://localhost:8080/api/user/login", {
            userId, userPw, userName 
        });

        // navigate("/");
    }

    // 라우터2 
    // 만약 userName이 변경되고, 유저이름이 있으면 /로 이동하도록 한다.
    useEffect(()=>{
        if(userName) navigate("/");
    }, [userName]);

    return <LogInComponent onClick={onClick} />;
}

// 라우터 설정을 위해 state에서 유저이름 가져옴
// props는 이 컨테이너를 불러온 상위 컴포넌트에서 보내준 props가 여기로 들어오게 된다.
// state는 store 자체가 들어오는 거라고 한다.
// 그리고 유저이름을 넣어서 다음 놈한테 프롭스로 보내준다는 뜻이라고 한다.
const mapStateToProps = (state, props) => {
    return {
        userName: state.userInfo.userName
    };
}

export default connect(mapStateToProps)(LogInContainer);