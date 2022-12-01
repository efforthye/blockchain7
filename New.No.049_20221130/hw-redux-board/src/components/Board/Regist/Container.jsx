import RegistComponent from "./Component"
import { connect } from "react-redux";
import store from "../../../modules/store";
import { useEffect, useState } from "react";
import { action } from "../../../modules/reducer/boardDB";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

// 값받아오기
const RegistContainer = ({ userId, userName }) => {

    // 라우터(나중에)
    const navigate = useNavigate();

    // 현재시간을 위해

    // 페이로드에 보내줄 값? 리듀서에서 필요하면 숫자 증가해 주고 그래야 할듯..
    // 게시판 번호
    const [boardNum, setBoardNum] = useState(0);
    // 현재시간
    const [nowTime, setNowTime] = useState(0);
    // 조회수
    const [clickNum, setClickNum] = useState(0);
    // 추천수
    const [likeNum, setLikeNum] = useState(0);


    // 온클릭 함수 미리 만들어주기(값받아오기)
    // 내용 더 추가하기
    const onClick = (title, context) => {

        console.log(`id : ${userId}, nickname : ${userName}, title : ${title}, context : ${context}, nowTime : ${nowTime}`);
        // 이제 리듀서에 보내줄 action을 작성해주면 된다. (modules!!)
        // store.dispatch({type : "ihihi", payload : {userId, userName, title, context}});
        // 더 추가하기
        store.dispatch(action.regist(userId, userName, title, context, moment().format('YYYY-MM-DD HH:mm:ss')));
        
        navigate("/");
    }

    // 만약 보드가 추가되면 네비게이션을 바꿔주려고 한다.(나중에)
    // useEffect(() => {
    //     if (!userName) navigate("/");
    // }, [nowTime]);

    return <RegistComponent onClick={onClick} />
}

// state에서 받아올 값
const mapStateToProps = (state, props) => {
    return {
        userName: state.userInfo.userName,
        userId: state.userInfo.userId,
    }
}

export default connect(mapStateToProps)(RegistContainer);