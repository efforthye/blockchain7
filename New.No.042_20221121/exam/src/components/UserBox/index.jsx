import styled from "styled-components";
import Regist from "./Regist";
import Login from "./Login";
import Logout from "./Logout";
import { useEffect, useState } from "react";

export default function UserBox(){

    const [users, setUsers] = useState([]); // 모든 아이디 정보
    const [user, setUser] = useState(""); // 현재 로그인 상태

    // 로그인 유저가 변경됨을 감지
    useEffect(()=>{
        console.log(user);
    }, [user]);

    // 회원이 안들어감
    useEffect(()=>{
        console.log(users);
    }, [users]);

    return (
        <UserStyled>
            <Regist users={users} setUsers={setUsers} />
            <Login users={users} setUser={setUser} />
            <Logout user={user} setUser={setUser} />
        </UserStyled>
    );
}

const UserStyled = styled.div``;