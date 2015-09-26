var express = require('express');
var app = express();
var http = require('http').Server(app);

var socketIo = require('socket.io');
var io = socketIo(http);

app.get('/', function(req, res){
	res.status
	res.json
  	res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
