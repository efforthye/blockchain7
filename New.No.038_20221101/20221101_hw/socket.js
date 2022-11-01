const socket = require("socket.io");

module.exports = (server) =>{
    const io = socket(server);

    io.on("connection", (ws)=>{

        ws.on("login", (data)=>{
            console.log(data);

            // 양쪽 다에게 보내지는 메시지
            io.emit("login-message", data+"님이 접속하였습니다.");

            // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다.
            // 나를 제외한 상대
            // ws.broadcast.emit("login-message", data+"님이 접속하였습니다.");
        });

        ws.on("logout", (data)=>{
            // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다.
            // ws.broadcast.emit("logout-message", data+"님이 로그아웃 하였습니다.");
            io.emit("logout-message", data+"님이 로그아웃 하였습니다.");
        });

        ws.on("send", (data)=>{
            io.emit("send-message", `${data["user"]} : ${data["chat"]}`);
        });

        ws.on("message", (data)=>{
            console.log(data);
        });

        ws.on("hi1", ()=>{
            io.emit("message1", ws.data);
        });

        ws.on("disconnect", ()=>{
            console.log("disconnection");
        });
    });
}