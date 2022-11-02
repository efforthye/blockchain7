const socket = require("socket.io");
const {Chat} = require("./models/index.js"); //

// socket() : 소켓 서버를 만들어주는 함수
// server : 우리가 index.js에서 연 서버이다.
// socket(require("express")().listen(8080)); 이래도 된다..
module.exports = (server) => {
    console.log(server);
    const io = socket(server);

    io.on("connection", (ws)=>{

        // db에서 꺼내서 프론트쪽에 보냄
        Chat.findAll().then((data)=>{
           ws.emit("list", {list : data}); 
        });


        ws.on("login", (data)=>{
            ws.userId = data.id;
            ws.emit("login", {id:ws.userId});
            ws.broadcast.emit("loginInfo", {id:ws.userId});
            // ws.broadcast.emit("login", {id:ws.userId});
        });

        ws.on("logout", ()=>{
            ws.emit("logout");
            ws.broadcast.emit("logoutInfo", {id:ws.userId});
            ws.userId = undefined;
            
        });
        
        //db에 추가
        ws.on("chat", async (data)=>{
            try{
                if(ws.userId){
                    await Chat.create({userId : ws.userId, text : data.text});
                    io.emit("chat", {id : ws.userId, text : data.text});
                }else{
                    ws.emit("chat", {text : "거수자는 이름을 밝혀라."});
                }
            }catch(err){
                ws.emit("chat", {text : "관리자 DB 관리 안하냐?"})
                console.error(err);
            }

        });
    });


};