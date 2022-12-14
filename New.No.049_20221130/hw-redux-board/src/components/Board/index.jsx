// 라우터 설정(홈, 보드, 보드등록..... : 로그아웃처럼 만든다.)
import styled from "styled-components";
import { connect } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import ListContainer from "./List/Container";

import RegistContainer from "../Board/Regist/Container";

// connect를 통해 state에서 유저이름 값을 받아왔다.
const BoardComponent = ({userName}) => {
    return (
        <BoardBox>
            <div>
                <Link to={'/board'}>게시판</Link>
                {/* 유저 이름이 있으면 등록버튼을 띄운다. */}
                {!userName ? <></> : (<>
                    {" "}
                    | <Link to={'/board/regist'}>등록</Link>
                </>)}
            </div>

            {/* 등록버튼 클릭시 이동할 컴포넌트 설정 */}
            <Routes>
                <Route path="/board/regist" element={<RegistContainer />}></Route>
            </Routes>

            {/* 게시판 리스트를 띄운다. */}
            <ListContainer />

        </BoardBox>
    );
}

// 로그인하면 등록버튼 보이게 하기 위해 state의 userName값을 가져온다.
const mapStateToProps = (state, props) => {
    return {
        userName: state.userInfo.userName
    };
}

// 연결해서 유저이름 값을 BoardComponent에 보내준다.
export default connect(mapStateToProps)(BoardComponent);

const BoardBox = styled.div`
    margin : 5px 0;
    border : 1px solid gray;
    // border-radius : 5px;
    min-height : 400px;
    padding : 10px;
    padding: 30px 40px;
    a{
        text-decoration: none;
        color: black;
    }
`;