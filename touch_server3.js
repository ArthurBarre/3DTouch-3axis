var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
//redirect / to our index.html file
app.get('/remote', function(req, res,next) {
  res.sendFile(__dirname + '/public/remote/remote.html');
});
app.get('/client', function(req, res,next) {
  res.sendFile(__dirname + '/public/client/client.html');
});

//when a client connects, do this
io.on('connection', function(client) {
  client.on('positionUpdate', function(data) {
    //send a message to ALL connected clients
    io.emit('positionUpdate',data);
  });
  console.log('Client connected...');
});

//start our web server and socket.io server listening
server.listen(1234, function(){
  console.log('listening on *:1234');
});