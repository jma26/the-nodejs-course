var http = require('http');
var jade = require('jade');
var fs = require('fs');
var port = 5000;

http.createServer(callback).listen(port);

function callback(request, response) {
  if (request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/views/helloworld.jade', 'utf-8', function(err, source) {
      // Other compilation is .compileFile('path to file')
      // This compiles a template and returns the result to response object
      var template = jade.compile(source);
      var output = template({name: 'Jesse Ma'});
      response.write(output);
      response.end();

      if (err) {
        response.end(err);
      }
    })
  }
}

console.log('Server running at http://localhost:' + port);