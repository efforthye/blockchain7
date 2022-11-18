import React from "react";
import styled from "styled-components";


export default class BtnComp extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        // className은 해당 컴포넌트에 써야 한다. 상위 컴포넌트에서 보내주는 값으로 인식하기 때문
        // return <div className="num-pad" onClick={this.props.onClick}>{this.props.item}</div>
        return <NumPad className="num-pad" onClick={()=>{
            this.props.onClick(+this.props.item);
        }}>{this.props.item}<div></div></NumPad>
    }

}


// 아래의 스타일을 입힌 div 컴포넌트를 알아서 만들어 준다. div대신 쓰면 된다.
const NumPad = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(245,245,245);
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
    div{
        width : 10px;
        height : 10px;
        background-color : purple;
        &:nth-child(2){
            background-color : blue;
        }
    }
    &:nth-child(2n){
        background-color : lightgray;
    }
`;

// & : 현재 태그 선택자 div안에 썼으면 div를 뜻한다.