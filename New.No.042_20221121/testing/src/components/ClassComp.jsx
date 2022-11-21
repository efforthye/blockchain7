import React from "react";

export default class ClassComp extends React.Component{

    // 상위 컴포넌트의 props를 받기 위함, class는 this를 써야 한다.
    constructor(props){
        super(props);
        this.props.func();

        // state : 상태값으로, React의 리랜더링의 기준이 된다.(다시 그리기)
        // state가 변경(재정의)되면 render메서드를 다시 실행해 웹 페이지에 출력한다.
        this.state = {test : "state test"};
    }


    // 라이프사이클 메서드들(실행, 수정, 삭제)
    // 컴포넌트 실행
    componentDidMount(){
        console.log("componentDidMount : 컴포넌트가 Virtual DOM에 추가(마운트)될 때 실행되는 메서드");
    }

    // 컴포넌트 수정
    componentDidUpdate(){
        console.log("componentDidUpdate : state값이 변화했을 때 실행되는 메서드");
    }

    // 컴포넌트 삭제
    componentWillUnmount(){
        console.log("componentWillUnmount : 컴포넌트가 DOM에서 삭제될 때 실행되는 메서드");
    }

    render(){

        return <div onClick={function(){
            this.setState({test : this.state.test+"1"});
        }.bind(this)}>ClassComp, {this.props.text}, {this.state.test}</div>;
    }
}