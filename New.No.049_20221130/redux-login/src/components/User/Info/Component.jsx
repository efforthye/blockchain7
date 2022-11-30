import styled from "styled-components";

const InfoComponent = ({userName}) =>{
    return <InfoBox>{userName}님 어서오세요.</InfoBox>;
}
export default InfoComponent;

const InfoBox = styled.div`
    
`;