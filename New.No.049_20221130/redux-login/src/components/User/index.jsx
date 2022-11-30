import styled from 'styled-components';
import LogInContainer from './LogIn/Container';
import RegistContainer from "./Regist/Container";
import InfoContainer from './Info/Container';

// state의 userName을 보내기 위함
import {connect} from 'react-redux';

// 유저에 대한 총체적인 컴포넌트
// 유저이름 mapStateToProps에서 받아옴.
const UserComponent = ({userName}) =>{
    return (
    <UserBox>
        {/* 유저 이름이 있으면 유저정보 컨테이너만 띄우고, 없으면 회원가입 로그인을 띄운다. */}
        {userName ? (<InfoContainer />) : (<><RegistContainer /><LogInContainer /></>)}
    </UserBox>
    );
}

// state의 userName을 보냄
const mapStateToProps = (state, props)=>{
    return {
        userName : state.userInfo.userName
    };
}

export default connect(mapStateToProps)(UserComponent);

const UserBox = styled.div`
    border : 1px solid black;
    border-radius : 5px;
    padding : 10px;
`;