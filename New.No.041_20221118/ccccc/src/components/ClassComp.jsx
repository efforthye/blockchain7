// # yarn
// yarn : React에 최적화하기 위해서 Facebook에서 만든 패키지 매니저이다.
// npm 이랑은 약간 다르다고 한다. node 18버전 들어오면서 아예 달라졌다고 한다.
// 

// # yarn 사용 명령어
// npm i -g corepack
// cmd cd new.no.041*
// yarn create react-app yarntest : yarntest라는 yarn 폴더가 생긴다.
// cmd yarn -v : cmd에서 yarn 버전 확인 가능(1.22.19)

// 다시 react로 돌아와서 cd ccccc, npm start 했음

import React from "react";

export default class ClassComp extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    // Virtual DOM에 추가될 때 실행되는 함수
    componentDidMount() {
        console.log("componentDidMount");
    }

    // state가 변경된 후에 실행되는 함수
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // Virtual DOM에서 삭제될 때 실행되는 함수
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    render() {
        return (
            <>
                <div onClick={function (e) {
                        e.stopPropagation();
                        this.setState({ count: this.state.count + 1 });
                    }.bind(this)}
                >{this.state.count}</div>

                
                <div onClick={function (e) {
                        e.stopPropagation();
                        this.props.setCount(this.props.count + 1);
                    }.bind(this)}
                >{this.props.count}</div>
            </>
        );
    }

    // div 영역이 이상한 코드
    // render(){
    //     return <>
    //         <div onClick={()=>(
    //             this.setState({count : this.state.count+1})
    //         )}>{this.state.count}</div>
    //         <div onClick={()=>(
    //             this.props.setCount(this.props.count+1)
    //         )}>{this.props.count}</div>
    //     </>
    // }

}
