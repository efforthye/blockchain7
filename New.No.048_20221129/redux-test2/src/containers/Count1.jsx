import Count1Comp from '../components/Count1';

import store from '../store';
import { action } from '../modules/count1';
import { useState } from 'react';

const Count1Container = () =>{
    const count1 = store.getState().count1;

    const [_, render] = useState(true);

    const plus = () =>{
        store.dispatch(action.plus);
        render((state)=> !state);
    }
    const minus = () =>{
        store.dispatch(action.minus);
        render((state)=> !state);
    }
    const input = (input) =>{
        // store에 dispatch로 action({type:'count1/input',payload:내용..})을 전달한다.
        store.dispatch(action.input(input));
        render((state)=> !state);
    }

    return <Count1Comp count1={count1} plus={plus} minus={minus} input={input} />;
}

export default Count1Container;