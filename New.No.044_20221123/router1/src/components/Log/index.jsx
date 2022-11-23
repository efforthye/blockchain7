import {Routes, Route} from 'react-router-dom';
import In from './In';
import Out from './Out';

export default function Log(){
    return (
        <div>
            ᓚᘏLogᗢ
            <Routes>
                {/* 여기서 :id는 라우터에서 사용하는 변수같은 거라고 함(이해x) */}
                <Route path='/in/:id' element={<In />} />
                <Route path='/out' element={<Out />} />
            </Routes>
        </div>
    );
}