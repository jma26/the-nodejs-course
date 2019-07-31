// CommonJS Module
var http = require('http');
var router = require('./router');
var fs = require('fs');
var port = 5000;

http.createServer(callback).listen(port);

function callback(request, response) {
  if (request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(router.index, function(err, data) {
      if (!err) {
        response.write(data);
        response.end();
      } else if (err) {
        response.end(err);
      }
    });
  }
}

console.log('Server running at http://localhost:' + port);
