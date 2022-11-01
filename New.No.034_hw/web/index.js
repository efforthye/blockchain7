// 회원가입, 로그인, 로그아웃 버튼
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");

// 회원 입력값 : 회원 가입을 클릭할 때 새로 가져와야만 한다.
// const signUpId = document.getElementById("sign-up-id").value;
// const signUpPw = document.getElementById("sign-up-pw").value;
// const signUpName = document.getElementById("sign-up-name").value;
// const signUpGender = document.getElementById("sign-up-gender").value;
// const signUpAge = document.getElementById("sign-up-age").value;

// const signInId = document.getElementById("sign-in-id").value;
// const signInPw = document.getElementById("sign-in-pw").value;


// 회원가입
// 웹에서 내용을 입력하고 회원가입 버튼을 클릭하면 웹 js에서
// 회원가입 내용들을 읽어서 서버쪽(/api/user/regist)으로 post요청을 보낸다.
// 그러면 서버쪽 user js에서 내용들을 받아서
// 기존 배열인 userList[]배열에 응답받은 아이디(req.body.id)가 있는지 확인하고
// 없으면 유저 리스트에 아이디를 키로 해서 그 안에 회원가입 내용 정보 객체를 추가해 주고,
// 비밀번호 같은 경우는 암호화해서 추가하면 된다.
// 그리고 뭐 성공했다는 응답(res.send(어쩌구))을 보내주면 된다.
// 만약 이미 같은 아이디가 있으면 실패했다는 응답(res.send(어쩌구))을 보내준다.

// 회원가입
signUpBtn.onclick = async function(e){
    console.log("회원가입 클릭");
    e.preventDefault(); // 이거 안하면 어떻게 되는지? : 

    // 서버쪽(user regist)으로 axios를 이용해 데이터에 대한 요청(post)을 보낸다.
    // 라우터 경로 설정해주기
    const signUp = document.forms["sign-up"];
    await axios.post("/user/regist", {
        id :         signUp.id.value,
        pw :         signUp.pw.value,
        name :       signUp.name.value,
        nickname :   signUp.nickname.value,
        gender :     signUp.gender.value,
        age :        signUp.age.value
    });

    console.log("회원가입 데이터 보내기 끝");
    // console.log(`회원가입 데이터 : ${JSON.stringify(data)}`);

}


// 로그인(jwt+cookit : https://lakelouise.tistory.com/239?category=1033473)
// 내용을 입력하고 로그인 버튼을 클릭하면 
// 로그인 데이터를 axios를 통해 post(비공개)로 아이디와 값을 보내준다.
// 그러면 서버쪽 login js에서 아이디에 해당하는 
// 비밀번호(회원가입할때 저장한 암호화된 비번)가 암호화한 새로 입력한 비번과 같으면
// 쿠키를 응답(res.cookie())에 추가해준다.

// 로그인
signInBtn.onclick = async function(e){
    console.log("로그인 클릭");
    e.preventDefault();

    await axios.post("/user/login", {
        // 이 id, pw라는 놈을 읽을 수 없다고 함
        id : document.forms["sign-in"].id.value,
        pw : document.forms["sign-in"].pw.value
    });

    console.log("로그인시 쿠키에서 정보를 가져온다.");
    console.log(`document.cookie : ${document.cookie}`);
    
    console.log(`tempName(JSON.parse().name) : ${JSON.parse(window.atob(document.cookie.split("=")[1].split(".")[1])).name}`);
    console.log(`JSON.parse() : ${JSON.parse(window.atob(document.cookie.split("=")[1].split(".")[1]))}`);
    console.log(`window.atob() : ${window.atob(document.cookie.split("=")[1].split(".")[1])}`);
    console.log(`document.cookie.split()... : ${document.cookie.split("=")[1].split(".")[1]}`);


    console.log("로그인 데이터 보냄");

    // 쿠키에서 정보를 가져온다.


}


console.log(document.cookie);
// log_in=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNkIiwiaWF0IjoxNjY2NzcyMjQwLCJleHAiOjE2NjY3NzI4NDAsImlzcyI6InBociJ9.uE3lg2aK3jjXQvCNranhgmx7m9imQkfIbisGV-qRxEY








// 서버쪽 js를 읽을 수 있는 이유는 index.js에서 
// const routes = require("./routes/index.js");
// app.use("/api", routes); 를
// 설정해줬기 때문이다. routes의 index.js는 주소가 /api가 된다.
// 또한 routes의 index.js에서 
// const user = require("./user.js");
// router.use("/user", user); 를 해줬기 때문에
// /api/user으로 들어가면 routes의 user.js를 읽을 수 있는 것이다.

// module.exports = router;는 왜 필요하고 뭐 하는 놈인지 모름



// 어떤 json? json을 객체로 변환해 토큰을 쿠키에 추가한다.
// window.atob(document.cookie.split("=")[1].split(".")[1])