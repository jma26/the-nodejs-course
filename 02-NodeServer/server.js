// CommonJS Module
var http = require('http');
var fs = require('fs');
var port = 5000;

http.createServer(callback).listen(port);

function callback(request, response) {
  if (request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('about.html', function(err, data) {
      response.end(data);
    });
  } else if (request.url === '/jessema') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('awesome.html', function(err, data) {
      response.end(data);
    });
  } else {
    response.writeHead(400, {'Content-Type': 'text/html'});
    fs.readFile('404.html', function(err, data) {
      response.end(data);
    })
  }
}

console.log('Server running at http://localhost:' + port);
