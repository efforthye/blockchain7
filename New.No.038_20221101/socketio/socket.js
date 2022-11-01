const socket = require("socket.io");

module.exports = (server)=>{
    const io = socket(server);

    io.on("connection", (ws)=>{
        ws.on("hi1", ()=>{
            io.emit("message1", ws.data);
        });

        ws.on("hi", (data)=>{
            console.log(data);

            // 양쪽 다에게 보내지는 메시지
            // io.emit("message1", data);

            // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다.
            // ws.broadcast.emit("message1", "상대편에서 보낸 메시지");
            ws.broadcast.emit("message1", data);
        });
        ws.on("disconnect", ()=>{
            console.log("disconnection");
            io.emit("disconnect1", "아라라");
        });
    });
}



