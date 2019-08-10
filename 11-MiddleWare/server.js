var express = require('express');
var http = require('http');
var port = 4567;

var app = express();

http.createServer(app).listen(port);

app.get('/', function(request, response) {
  response.writeHead(200);
  response.write('Hello from 11-MiddleWare with express');
  response.end();
});

app.get('/yo', function(request, response) {
  response.writeHead(200);
  response.write('Hello from route /yo in 11-Middleware with express');
  response.end();
})

console.log('Server running on port', port);
