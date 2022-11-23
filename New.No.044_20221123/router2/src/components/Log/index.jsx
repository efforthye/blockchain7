import { Routes, Route, Outlet } from 'react-router-dom';
import In from './In';
import Out from './Out';


export default function Log() {
    return (
        <div>
            ᓚᘏLogᗢ
            {/* 하위 라우터(App.js에서 log안에있는놈들)의 위치를 결정한다. 굿굿 */}
            <Outlet />
        </div>
    );
}