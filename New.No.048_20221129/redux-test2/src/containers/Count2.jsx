import Count2Comp from '../components/Count2';

import { connect } from 'react-redux';
import { action } from '../modules/count2';

// 여기에 props내의 state를 가져오기 위해 아래의 connect를 쓴거라고 함
const Count2Container = ({count2, plus, minus, input}) =>{   
    return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
}

// 상태를 props로 바꿔준다. App.js에서 보낸 props를 여기서 받을 수 있다.
const mapStateToProps = (state, props) =>{
    // 객체 내의 값이 그대로 props에 전달된다고 한다.
    return {count2 : state.count2, ...props};
}
const mapDispatchToProps = (dispatch) =>{
    return{
        plus : () =>{
            dispatch(action.plus);
        },
        minus : () =>{
            dispatch(action.minus);
        },
        input : (input) =>{
            dispatch(action.input(input));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);