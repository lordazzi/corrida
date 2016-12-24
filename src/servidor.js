var io = require('socket.io').listen(9999);

io.sockets.on("connection", function(socket){
	socket.on('escrevi', function(data) {
		data.id = socket.store.id;
		io.sockets.emit('palavra', data);
	});
});