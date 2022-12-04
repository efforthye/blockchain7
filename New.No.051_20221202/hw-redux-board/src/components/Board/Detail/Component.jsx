import styled from "styled-components";

const DetailComponent = ({board}) => {

    console.log(board);

    return (
        <DetailBox>
            ㅎㅎ
            {/* {board.userId} */}
            
            {/* <h1>{board.title}</h1>
            <h3>userName : {board.userName} - {board.createdAt}</h3> */}

            {/* 보드에 해당하는 유저이름이 같은지 확인해서 편집 삭제 버튼을 띄운다.(중요) */}
            {/* {!isCreator || (
                <span>
                    <Link to={`/edit/${board.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => { remove() }}>Delete</button>
                </span>
            )} */}
            {/* <p>{board.context}</p> */}
        </DetailBox>
    );
}

export default DetailComponent;

const DetailBox = styled.div`

`;