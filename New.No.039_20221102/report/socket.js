const socket = require("socket.io");

// socket() : 소켓 서버를 만들어주는 함수
// server : 우리가 index.js에서 연 서버이다.
// socket(require("express")().listen(8080)); 이래도 된다..
module.exports = (server) => {
    console.log(server);
    const io = socket(server);

    io.on("connection", (ws)=>{
        ws.on("login", (data)=>{
            ws.userId = data.id;
            ws.emit("login", {id:ws.userId});
            ws.broadcast.emit("loginInfo", {id:ws.userId});
            // ws.broadcast.emit("login", {id:ws.userId});
        });

        ws.on("logout", (data)=>{
            ws.emit("logout");
            ws.broadcast.emit("logoutInfo", {id:ws.userId});
            ws.userId = undefined;
            
        });
        
        ws.on("chat", (data)=>{
            
        });
    });


};