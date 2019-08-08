// CommonJS Module
var http = require('http');
var fs = require('fs');
var port = 5000;
var Promise = require('promise');

http.createServer(callback).listen(port);

function callback(request, response) {
  var read = Promise.denodeify(fs.readFile);
  if (request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    read(__dirname + '/views/about.html').then(function(data) {
      response.end(data);
    });
  } else if (request.url === '/jessema') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    read(__dirname + '/views/awesome.html').then(function(data) {
      response.end(data);
    });
  } else {
    response.writeHead(400, {'Content-Type': 'text/html'});
    read(__dirname + '/views/404.html').then(function(data) {
      response.end(data);
    });
  }
}

console.log('Server running at http://localhost:' + port);
