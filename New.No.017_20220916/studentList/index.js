const headList = [
    // '번호', '이름', '나이', '거주지', 'MBTI', '혈액형'
    {type:"number", name:"번호"},
    {type:"name", name:"이름"},
    {type:"age", name:"나이"},
    {type:"area", name:"거주지"},
    {type:"mbti", name:"MBTI"},
    {type:"bloodType", name:"혈액형"}
];


const studentsList = [];
function createStudent(name, age, area, mbti, bloodType){
    studentsList.push({
        // name : name, //이것과 같다. 
        name, 
        age,
        area,
        mbti,
        bloodType
    });
};
createStudent('김성진',27,'성남','INTP','B');
createStudent('염예나',22,'하남','ENFP','B');
createStudent('박혜림',22,'광진','INFP','AB');
createStudent('정재훈',30,'강남','ENTP','B');
createStudent('이가원',27,'광진','ISFP','O');
createStudent('김재일',29,'용인','ENFP','AB');
console.log(studentsList);


const tableHeaderElem = document.getElementById("tableHeader");

// headList의 아이템(객체)의 name을 구조분해할당으로 가져온다.
// 리액트에서는 거의 이런 식으로 사용한다고 한다.(중요)
headList.forEach(({name})=>{
    tableHeaderElem.innerHTML += '<th>'+name+'</th>';
});

const studentListElem = document.getElementById("dataList");


studentsList.forEach((item,index)=>{
    let tempStr = '<tr>';

    // 배열 변수에 .을해서 type을 가져오는 게 아닌
    // headItem -> {type} 객체를 구조분해 할당을 이용해 바로 가져온다.
    headList.forEach(({type})=>{
        // headItem.type -> type으로 가져올 수 있다.
        if(type === "number"){
            tempStr += `<th>${index+1}</th>`;
        }else{
            tempStr += `<td>${item[type]}</td>`;
        }
    });
    tempStr += '</tr>';
    console.log(tempStr);

    studentListElem.innerHTML += tempStr;
});



