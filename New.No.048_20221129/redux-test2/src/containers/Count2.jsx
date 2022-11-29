import Count2Comp from '../components/Count2';

import { connect } from 'react-redux';
import { action } from '../modules/count2';

// 여기에 props내의 state를 가져오기 위해 아래의 connect를 쓴거라고 함
const Count2Container = ({count2, plus, minus, input}) =>{   
    return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
}

const mapStateToProps = (state, props) =>{
    // 객체 내의 값이 그대로 Count2Container의 props에 전달된다.
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

// Count2Container컴포넌트의 props로 전달
export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);