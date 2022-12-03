const TYPE = {
    ADD: 'comment/add',
    EDIT: 'comment/edit',
    REMOVE: 'comment/remove',
}

// 액션, 게시글에 직접 덧글을 추가할 수 있으나 그 방식은 비효율적이라고 한다.
// 이유는 덧글이 추가될 때마다 해당 게시글을 업데이트해야 하기 때문이다.
const add = (text, userId, userName, boardId) => ({
    type: TYPE.ADD,
    payload: {
        // 시간은 밑에서 추가한다.
        text, userId, userName, boardId
    }
})
const edit = (id, text) => ({
    type: TYPE.EDIT,
    payload: {
        id, text
    }
})
const remove = (id) => ({
    type: TYPE.REMOVE,
    payload: {
        id
    }
})
export const action = { add, edit, remove };

// 초기값 세팅
export const initialize = [];

// 댓글 아이디
let id = 0;

// 리듀서
export const reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPE.ADD:
            id++
            // 댓글 아이디와 만든 시간은 여기서 추가한다.
            return [{ id, ...payload, createdAt: new Date().toLocaleString() }, ...state];

        case TYPE.EDIT: {
            const index = state.findIndex(item => item.id == payload.id);
            return [
                ...state.slice(0, index),
                { ...state[index], ...payload },
                ...state.slice(index + 1)
            ];
        }

        case TYPE.REMOVE: {
            const index = state.findIndex(item => item.id == payload.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }

        default:
            return state;
    }

}