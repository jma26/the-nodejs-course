var http = require('http');
var jade = require('jade');
var fs = require('fs');
var port = 5000;

http.createServer(callback).listen(port);

function callback(request, response) {
  if (request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // fs.readFile() is not necessary. Jade API has compileFile() that compiles directly form a file
    var data = {
      name: 'Jesse Ma'
    };

    var template = jade.compileFile(__dirname + '/views/index.jade', {
      fileName: __dirname + '/views/index.jade'
    });

    var html = template(data);

    // Output jade template to response object
    response.write(html);
    response.end();
  }
}

console.log('Server running at http://localhost:' + port);