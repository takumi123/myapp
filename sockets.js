
var sockets = {};




sockets.init = function(server){
  io = require("socket.io").listen(server);


  var chat = io.of("/chat").on("connection",function(socket){///chatのみで使える
    socket.on("chat message",function(data){
      socket.join(data.room);
      socket.emit("emit_from_server",{id:socket.id,data:data.msg,name:data.name});
      socket.broadcast.to(data.room).emit("emit_from_server",{id:socket.id,data:data.msg,name:data.name});

        console.log(data);

        //socket.emitは接続しているもののみ。自分のみ
        //socket.broadcast.emitは接続している自分以外







    });


  });

  var news = io.of("/news").on("connection",function(socket){
    socket.emit("message",Date());


  })






}
module.exports = sockets;
