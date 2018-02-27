var express=require('express');
var app=express();
var server =require('http').createServer(app);
var io=require('socket.io').listen(server);
users= [];
connections= [];

server.listen(3000);
console.log('Server is running!');

_dirname='C:/Pro/Chat app/Chat-Application-using-NodeJs-';

app.get('/',function (req,res) {
	// body...
	res.sendFile(_dirname+'/index.html');
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('State_Connect: %s sockets connected', connections.length);
	//Disconnect
	connections.splice(connections.indexOf(socket),1);
	console.log('State_Disconnect: %s sockets connected', connections.length);
});