import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { STATUSLIST, TodoBtn } from '../../setting';
// List폴더 안에 이미지 들어있음
// 만약 svg이면 svg filter color검색해보기
// 이미지에 그대로 넣어주면 아이콘 색상 바꿀 수 있음
import penImg from './edit4.png';
import removeImg from './remove.png';

// Todo/List/List.jsx에서 받아옴
export default function Item({ listItem, itemIndex, setList }) {

    return (
        // ItemTr : 리스트 내용 정렬 css를 적용한 tr 엘리먼트
        <ItemTr>
            {/* 현재 리스트의 번호를 띄움 */}
            <td>{itemIndex + 1}</td>
            {/* list배열의 각각의 아이템에 해당하는 taskName을 띄움 */}
            <td>{listItem.taskName}</td>
            <td>
                {/* setting.jsx에서 현재 상태에 해당하는 버튼 스타일을 가져옴 */}
                {/* 모달 창에서 상태 버튼 클릭하는 것처럼 여기서도(현재상태띄움) 버튼에 클래스를 붙인다. */}
                <TodoBtn
                    className={STATUSLIST[listItem.status].toLowerCase().replace(" ", "-")}
                    style={{ cursor: "default" }}>
                    {/* 버튼의 내용 텍스트는 현재 상태 번호로 setting/Statuslist에서 가져옴 */}
                    {STATUSLIST[listItem.status]}
                </TodoBtn>
            </td>
            <td>
                {/* 수정은 수정할 창이 필요하기 때문에 삭제와 다르게 라우터로 보내준다.(중요) */}
                {/* state itemIndex를 보낸 이유 : TodoModal에서 수정시 현재 배열 번호를 사용하기 위함 */}
                {/* listItem은 수정할때 수정 창에서 현재 해당 값을 가져오기 위해서이다. */}
                {/* 버튼을 누르면(중요) Link to를 통해 Todo/index.jsx에 Route path로 설정되었던 edit 라우터로 설정한 TodoModal로 보낸다. */}
                {/* 그리고 그 수정 TodoModal안에 state값(수정할현재아이템번호,내용)을 보내준다. */}
                {/* 그러면 편집할 수 있는 모달 창이 뜨게 된다. 원리 : state값을 읽어와 있으면 입력창이 아닌 편집창을 띄우기 때문 */}
                <Link to={"/edit"} state={{ itemIndex, listItem }}>
                    {/* 버튼은 단순히 setting의 버튼에 todo클래스를 주어 배경색을 회색으로 하였다. */}
                    {/* 이미지는 위에서 펜 이미지를 import해 src에 넣어서 불러왔다.(중요) */}
                    <TodoBtn className='todo'><img src={penImg} alt="penImg"></img></TodoBtn>
                </Link>
            </td>
            <td>
                {/* 삭제 버튼 클릭시 리스트의 값중 해당하는 놈을 제외한 배열을 리턴한다. */}
                {/* 해당 값을 찾기 위해서 itemIndex를 통해 리스트를 slice했다.(쉬운데중요오~) */}
                <TodoBtn className='todo' onClick={() => {
                    setList(list => {
                        const before = list.slice(0, itemIndex);
                        const after = list.slice(itemIndex + 1);
                        return [...before, ...after];
                    });
                }}>
                    <img src={removeImg} alt="removeImg"></img>
                </TodoBtn>
            </td>
        </ItemTr>
    );
}

const ItemTr = styled.tr`
    text-align : center;
    height : 50px;

    td {
        border-bottom : 1px solid lightgray;
    }

    img{
        margin-top : 2px;
        width : 18px;
    }
`;