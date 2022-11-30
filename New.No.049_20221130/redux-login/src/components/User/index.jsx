import styled from 'styled-components';

import RegistContainer from "./Regist/Container";


// 유저에 대한 총체적인 컴포넌트
const UserComponent = () =>{
    return <UserBox>
        <RegistContainer />
    </UserBox>;
}

export default UserComponent;

const UserBox = styled.div`
    border : 1px solid black;
    border-radius : 5px;
    padding : 10px;
`;