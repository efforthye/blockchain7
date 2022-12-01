import styled from 'styled-components';
import AddContainer from './Add/Container';
import ListContainer from './List/Container';
import BoardContainer from './Board/Container';
import { Routes, Route, Link } from 'react-router-dom';

const FreeBoard = () => {
    return (
        <FreeBoardBox>
            <Routes>
                <Route path='/' element={<>
                    <AddContainer />
                    <ListContainer />
                </>} />
                {/* 중요 */}
                <Route path='/board/:id' element={
                    <BoardContainer />
                } />
            </Routes>
        </FreeBoardBox>
    );
}
export default FreeBoard;

const FreeBoardBox = styled.div`

`;