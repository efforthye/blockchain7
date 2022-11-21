import styled from "styled-components";

export default function Logout({user, setUser}){
    return <div>
        {/* || : 또는 이라는 뜻으로, 앞의것이 false이면 뒤의 것을 출력한다. */}
        {!user || `${user}님 어서오세요. `}
        {/* 더 쉬운 버전 : user가 있으면 어서오세요, 아니면 비워둠 */}
        {/* {user ? `${user}님 어서오세요.` : ""} */}
        <button onClick={()=>{
            setUser("");
        }}>로그아웃</button>
    </div>;
}
