var fs = require('fs');

var filePath = __dirname + '/randomText.txt';

fs.readFile(filePath, 'utf8', function (error, data) {
  console.log('Reading file...\n');
  console.log('Errors: ' + error + '\n');
  console.log(data);
});
