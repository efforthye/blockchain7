import React from "react";


export default class BtnComp extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        // className은 해당 컴포넌트에 써야 한다. 상위 컴포넌트에서 보내주는 값으로 인식하기 때문
        // return <div className="num-pad" onClick={this.props.onClick}>{this.props.item}</div>
        return <div className="num-pad" onClick={()=>{
            this.props.onClick(+this.props.item);
        }}>{this.props.item}</div>
    }

}