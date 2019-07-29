// CommonJS Module
var http = require('http');
var port = 5000;

http.createServer(callback).listen(port);

function callback(request, response) {
  response.writeHead(200);
  response.write('<h1>This is a direct message from the url: ' + request.url + '</h1>\n');
  response.end();
}

console.log('Server running at http://localhost:' + port);
