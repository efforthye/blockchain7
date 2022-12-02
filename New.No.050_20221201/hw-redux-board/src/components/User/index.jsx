import styled from 'styled-components';
import LogInContainer from './LogIn/Container';
import RegistContainer from "./Regist/Container";
import InfoContainer from './Info/Container';

// state의 userName을 보내기 위함
import { connect } from 'react-redux';

// 라우터 
import { Routes, Route, Link } from 'react-router-dom';

// 유저에 대한 총체적인 컴포넌트
// 유저이름 mapStateToProps에서 받아옴.
const UserComponent = ({ userName }) => {
    return (
        <UserBox>
            <div>
                {/* 홈은 기본적으로 띄우고, 만약 닉네임이 있으면 회원가입과 로그인 안보이게 함 */}
                <Link to={'/'}>Home</Link>
                {userName ? <></> : (<>
                    {" "}
                    | <Link to={'/regist'}>Regist</Link>
                    {" "}
                    | <Link to={'/login'}>LogIn</Link>
                </>)}
            </div>

            {/* 유저 이름이 있으면 유저정보 컨테이너만 띄우고, 없으면 회원가입 로그인을 띄운다. */}
            {/* 이해안됨 */}
            {userName ? (<InfoContainer />) : <></>}

            {/* 라우트들 자체는 밖에 있든없든 상관없음 */}
            <Routes>
                <Route path='/regist' element={<RegistContainer />} ></Route>
                <Route path='/login' element={<LogInContainer />} ></Route>
            </Routes>
            
        </UserBox>
    );
}

// state의 userName을 보냄
const mapStateToProps = (state, props) => {
    return {
        userName: state.userInfo.userName
    };
}

export default connect(mapStateToProps)(UserComponent);

const UserBox = styled.div`
    background-color : rgb(245,245,245);
    // border : 1px solid black;
    border-radius : 5px;
    padding : 10px;

    a{
        color : black;
        text-decoration : none;
    }
`;