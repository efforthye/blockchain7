// # HTTP 통신 : 80번 포트로 통신한다. 클라이언트가 요청을 하고, 서버가 그 요청에 대해서 응답.
// 요청이 없으면 서버가 응답을 보낼 수 없다. 그러면 서버가 클라이언트에게
// 마음대로 데이터나 정보 등을 보낼 수 없다고 한다. 이것이 HTTP의 특징..
// 인증서 사용을 안한다? HTTPS 통신이랑 비교를 할 때 인증서 언급한다.
// # SOKET 통신 : 서버에서도 마음대로 데이터를 보낼 수 있도록 하는 방식이
// 보통 C++, C, Java 등으로 구현한다. : 웹 페이지가 아니라 프로그램 자체에서 사용된다는 뜻.
// 웹에서도 이러한 방식이 필요하다고 느껴서 만들어진게 Web Socket이다.
// 요즘은 거의 쓰이지 않지만 기초적인 라이브러리가 ws이다.

const WebSocket = require("ws");

module.exports = (server)=>{
    // // 소켓을 연결한다.(핸드셰이킹?) 
    // close() 전까지는 socket이 계속 연결된 상태라고 한다.
    const socket = new WebSocket.Server({server});

    let count = 0;

    // on의 두번째 인자 : 콜백함수
    // 만약 연결되면
    socket.on("connection", (ws, req)=>{
        console.log("socket start");
        ws.on("message", (msg)=>{
            console.log(msg.toString());
        });
        ws.interval = setInterval(()=>{
            ws.send(count++);
        }, 1100);
        ws.on("close", ()=>{
            clearInterval(ws.interval);
            console.log("disconnection");
        });
    });
}