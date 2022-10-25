// 클라이언트, axios를 통해 데이터를 서버 쪽으로 보낸다.

const todoList = document.getElementById("list");

function getList(){
    todoList.innerHTML = ""; // 이렇게 안하면 리스트가 중첩됨
    axios.get('/api/list').then((resData)=>{
        resData.data.list.forEach(todo=>{
            const tempElem = document.createElement("li");
            tempElem.innerHTML = todo + `<button id="putBtn">수정</button><button id="deleteBtn">삭제</button>`;
            todoList.append(tempElem);
        });
    });
}
getList();


document.forms['todo-form'].onsubmit = function(e){
    e.preventDefault(); // 기본 이벤트를 막는다.

    // XMLHttpRequest => fetch/ajax => axios
    // http 모듈 => express

    // axios.post('라우터', 서버의 req.body)
    // axios는 저 데이터를 보낸다.
    axios.post('/api/list', {
        "name" : document.forms["todo-form"]["do-name"].value,
        "time" : new Date().toLocaleString()
        // test : 1
    }).then((data)=>{
        getList();
    });

    // axios.get(
    //     '/api/add?name='+
    //     document.forms["todo-form"]["do-name"].value+
    //     "&test=김영준"
    // );

    // const getUrl = '/api/add?name='+
    //     document.forms["todo-form"]["do-name"].value+
    //     "&test=김영준";
    // axios.get(getUrl);

    // getList();


    // 이 코드를 적절하게 사용한다.
    // 수정
    axios.put("/api/list",{

    }).then((data)=>{

    });
    // 삭제
    axios.delete("/api/list",{

    }).then((data)=>{

    });

    


}





