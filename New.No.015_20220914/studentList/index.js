const headList = [
    // '번호', '이름', '나이', '거주지', 'MBTI', '혈액형'
    // {type:"number", name:"번호"}, 0번째 아이템~~ 이거 하나하나가 아이템임
    {type:"number", name:"번호"},
    {type:"name", name:"이름"},
    {type:"age", name:"나이"},
    {type:"area", name:"거주지"},
    {type:"mbti", name:"MBTI"},
    {type:"bloodType", name:"혈액형"}
    // 버튼으로 입력값을 받아서 추가를 할 수도 있다고 한다.
];


const studentsList = [];
// 객체 정의 시 객체 내에 다른 변수만을 넣으면, 변수명과 변수의 값을
// 키와 값에 대칭(매치)하여 값에 입력한다.
// name 매개변수에 정의된 값을 객체의 name키에 대한 값으로 정의한다.
function createStudent(name, age, area, mbti, bloodType){
    studentsList.push({
        // name : name, //이것과 같다. 
        name, 
        age,
        area,
        mbti,
        bloodType
    });

    // 간단 예제
    let temp = 100;
    const tempObj = {
        temp
    };
    console.log(tempObj); //{temp: 100} 6번 출력됨(6번인 이유는 위의 매개변수 때문에)
};
createStudent('김성진',27,'성남','INTP','B');
createStudent('염예나',22,'하남','ENFP','B');
createStudent('박혜림',22,'광진','INFP','AB');
createStudent('정재훈',30,'강남','ENTP','B');
createStudent('이가원',27,'광진','ISFP','O');
createStudent('김재일',29,'용인','ENFP','AB');
console.log(studentsList);


// #tableHeader라는 아이디를 가진 엘리먼트를 가져와 tableHeaderElem에 담는다.
// 원래 tableHeaderElem 안에는 아무것도 없다.
const tableHeaderElem = document.getElementById("tableHeader");

// 맨 위에 있는 headList라는 배열을 기준으로 forEach를 돌린다.
// 비어있는 tableHeaderElem의 innerHTML안에 내용을 추가해주는 것이다.
// 이 놈 자체는 <th>항목들...(번호,이름,나이 등)</th>를 목록수만큼 추가해주는 코드이다.
headList.forEach(item=>{
    tableHeaderElem.innerHTML += '<th>'+item.name+'</th>';
});

// tbody를 가져온다.. studentListElem 변수에 담는다.
// tbody안에 데이터를 넣기 위해서
const studentListElem = document.getElementById("dataList");


// studentsList라는 배열에 forEach문을 돌린다.
studentsList.forEach((item,index)=>{
    // 그냥 tr부터 집어넣으면 html이 인식하고 닫아버려서 변수로 만들고 필요할때 집어넣는다.
    // studentListElem.innerHTML += '<tr>'; //이러면 세로한줄로 내용들이 쭈르륵 뜬다.
    // 임시로 쓸 string을 초기화한다.
    let tempStr = '<tr>';

    // 아이템 td를 하나하나 추가해 준다. 맨위 배열의 type들을 추가해준다.
    headList.forEach((headitem)=>{
        // 아이템의 타입은 항상 string이기 때문에 number이 차례차례 걸리면 순서를 th에 출력한다.
        if(headitem.type === "number"){
            tempStr += `<th>${index+1}</th>`;
        }else{
            // 아이템 각각의 타입을 가져와 td에 넣고 tempStr에 추가해준다.
            tempStr += `<td>${item[headitem.type]}</td>`;
        }
    });
    tempStr += '</tr>';
    console.log(tempStr);

    // 마지막으로 완성된 놈을 tbody 안에 넣어준다.
    studentListElem.innerHTML += tempStr;
});




// 팀장급 : 아래 코드 분석 fear.정현
// 올려 주신다고 함