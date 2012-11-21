var express =  require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , url = require('url');

server.listen(8888);

app.get('/console', function (req, res) {
  	var query = url.parse(req.url, true).query;
	io.sockets.emit("message", {message: query.message, type: query.type});
	res.header("Content-Type", "image/PNG");
	res.end('');
});