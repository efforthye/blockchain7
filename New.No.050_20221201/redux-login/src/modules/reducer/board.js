
// 일거리들을 만들어 놨으니 해당 일거리에 대한 주문서(action)를 만든다.
const TYPE = {
    ADD: "board/add",
    REMOVE: 'board/remove',
    EDIT: 'board/edit'
}

// 액션(타입, 페이로드)
const add = (title, text, userName) => ({
    type: TYPE.ADD,
    payload: { title, text, userName }
});
// 몇 번째 놈을 지울건지 id
const remove = (id) => ({
    type: TYPE.REMOVE,
    payload: { id }
});
// id를 기준으로 제목과 내용 수정 가능
const edit = (id, title, text) => ({
    type: TYPE.EDIT,
    payload: { id, title, text }
});

export const action = { add, remove, edit };

// 초기값 설정
export const initialize = [];
// 수정 삭제를 위해 게시글의 id값을 지정해준다.
let id = 0;

// 리듀서를 통해 state를 수정함
export const reducer = (state=[], action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.ADD:
            const {title, text, userName} = payload;
            id++;

            // 현재 시간은 리듀서에서 넣는다.
            return [ 
                // 최신 입력값을 위로 올리기 위해 state를 뒤에 풀어서 넣어줌
                {id, title, text, userName, createdAt:(new Date()).toLocaleString()}, ...state, 
            ];

        case TYPE.REMOVE:
            return state;

        case TYPE.EDIT:
            return state;

        default:
            return state;
    }
}