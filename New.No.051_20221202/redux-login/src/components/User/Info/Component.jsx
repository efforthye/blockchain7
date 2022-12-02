import styled from "styled-components";

const InfoComponent = ({ userName, onClick }) => {

    return (
        <InfoBox>
            {userName}님 어서오세요.
            <button onClick={()=>{
                onClick();
            }}>로그아웃</button>
        </InfoBox>
    );
}
export default InfoComponent;

const InfoBox = styled.div`

`;