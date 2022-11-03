const socket = require("socket.io");

module.exports = (server) => {
    const io = socket(server);

    // test라는 네임스페이스를 사용한다.
    // 네임스페이스 : 채널, join 어쩌구 : 방, 
    io.of("/test").on("connection", (ws)=>{
        ws.on("test", (data)=>{
            console.log("/test"+data);
        });
    });

    // namespace : 라우터
    // 진짜 라우터와 같은 역할을 한다.
    // 소켓에 있어서 제일 큰 분류이다.
    // axios.post("/api/board") => app.post("/api/board")
    // socket.io에서는 socket("/room") => io.on("/room") ... io로만 들어옴
    // socket.io에서는 socket("/chat") => io.on("/chat") 
    // socket.io에서는 socket("/user") => io.on("/user") 
    // 단점(ws관련됨) : 연결이 따로 되는 것이기 때문에 ws자체가 다르다.
    // ws자체가 다르다?? : 

    // room : 방
    // 이름 그대로 방이다.
    // namespace의 하위에 속한다 : ??
    // io.on 이후에 사용된다. : ws를 마음껏 사용할 수 있는 거라고 한다.
    // 

    // on : 이벤트
    // io.on, ws.on : 이 메서드들은 어떤 메서드? : 
    // 어떤 상황일 때 실행되는 코드(콜백함수, addEventListener와 같은 역할이다..)
    // 무슨 소리냐 : 여러개 넣으면 여러번 실행된다.
    // onclick=function과 addEventListener("click", function)과 비교하면서 테스트해보고
    // addEventListener와 on은 같은 기능을 한다고 이해하면 된다.

    io.on("connection", (ws) => {
        ws.on("test", (data)=>{
            console.log(data);
        });

        ws.on("login", (data) => {
            ws.userId = data.id;
            ws.emit("login", { id: ws.userId });
            // ws.broadcast.emit("loginInfo", { id: ws.userId });
        });

        ws.on("logout", () => {
            if (ws.room) {
                // 방에서 나간다.
                ws.leave(ws.room);
                ws.emit("roomInfo", {});
                ws.broadcast.to(ws.room).emit("logoutInfo", { id: ws.userId });
                ws.room = undefined;
            }
            ws.emit("logout");
            // ws.broadcast.emit("logoutInfo", { id: ws.userId });
            ws.userId = undefined;

        });

        // 소켓통신에서 방에 들어가는 것 : join, leave, to를 사용한다.
        // emit으로 보내기 전에 사용한다.
        ws.on("chat", (data) => {
            if (!ws.userId) {
                ws.emit("chat", { text: "거수자는 이름을 밝혀라." });
            } else if(!ws.room) {
                ws.emit("chat", { text: "혼자 떠들래? 방에 들어가라~" });
            }else{
                io.to(ws.room).emit("chat", { id: ws.userId, text: data.text });
            }
        });

        ws.on("room", (data) => {
            if (ws.userId) {
                // 만약 룸이 있으면 룸을 비워줌
                if (ws.room) {
                    // 방에서 나간다.
                    ws.leave(ws.room);
                    // 나의 룸을 비워준다.
                    ws.emit("roomInfo", {});
                    // 이전 방에 나를 제외한 사람들에게 내가 방에서 나가는걸 알림
                    ws.broadcast.to(ws.room).emit("logoutInfo", { id: ws.userId });
                }
                // 방에 들어간다.
                ws.room = data.room;
                ws.join(ws.room);

                // 방에 들어왔습니다.
                ws.emit("roomInfo", { room: ws.room });

                // to()는 어떠한 방에 메세지를 보낸다.
                // io.to(ws.room).emit("loginInfo", { room : ws.userId });
                // 나를 제외한(broadcast) 다른 사람, 어떠한 방(to)에다 뿌린다.
                ws.broadcast.to(ws.room).emit("loginInfo", { id: ws.userId });
            } else {
                ws.emit("chat", { text: "방에 입장해주세요." });
            }
        });
    });
};