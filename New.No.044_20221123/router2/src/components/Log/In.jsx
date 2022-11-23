// 우리가 입력한 라우터의 변수(:id)를 useParams로 가져올 수 있다고 한다.
// 변수처럼 라우터를 써먹을 수 있다고 한다.
import {useParams} from 'react-router-dom';

export default function In(){

    // useParams() : 라우터에서 정해진 라우터가 아니라 
    // 변할 수 있는 값이 들어왔을 때 받는 Hook/method라고 한다.
    // 상위 컴포넌트의 Route에서는 '/:이름' 이라고 구현한다.
    // /src/components/Log/inndex.jsx에서 userId라고 이름을 선언했으며
    // params.userId로 가져올 수 있다.(중요)
    const params = useParams();
    console.log(params);

    return (
        <div>ᓚᘏ In ᗢ</div>
    );
}

