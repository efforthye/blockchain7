import { connect } from "react-redux";
import Regist from "../components/Regist";
import { action } from "../modules/regist";

// 이놈이 App.js에 출력됨(매개변수 값 : 아래의 connect를 통해 가져옴)
const RegistContainer = ({ user, regist }) => {
    return <Regist user={user} regist={regist} />;
};

// state : store로부터 온 state
// 상위 컴포넌트(App.js)에서 보낸 props 전체를 받아 현재 상태에 추가해준다.
const mapStateToProps = (state, props) => {
    // 객체 내의 값이 그대로 props에 전달된다고 한다.
    // return { user: [...state.user, ...props] };
    // console.log({ user: [...state.user] }); // 일단 비어있음...
    // return { user: [...state.user] };
    // console.log({ user: state.user, ...props });
    // console.log({ user: state, ...props });
    return { user: state, ...props };
    // return state;
}


// dispatch : store의 dispatch() 메서드
const mapDispatchToProps = (dispatch) => {
    return {
        // 내용들..
        regist: (name, id, pw) => {
            dispatch(action.regist(name, id, pw));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistContainer);














// import Count2Comp from '../components/Count2';

// import { connect } from 'react-redux';
// import { action } from '../modules/count2';

// // 여기에 props내의 state를 가져오기 위해 아래의 connect를 쓴거라고 함
// const Count2Container = ({count2, plus, minus, input}) =>{
//     return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
// }

// // App.js에서 보낸 props를 받아 현재 상태에 추가해준다.
// const mapStateToProps = (state, props) =>{
//     // 객체 내의 값이 그대로 props에 전달된다고 한다.
//     return {count2 : state.count2, ...props};
// }
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         plus : () =>{
//             dispatch(action.plus);
//         },
//         minus : () =>{
//             dispatch(action.minus);
//         },
//         input : (input) =>{
//             dispatch(action.input(input));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);