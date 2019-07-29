var fs = require('fs');

// Exercise - Read a file
var filePath = __dirname + '/randomText.txt';
// Exercise - get the current directory
console.log(__dirname);

fs.readFile(filePath, 'utf8', function (error, data) {
  // Exercise - Read a file
  console.log('Reading file...\n');
  console.log('Errors: ' + error + '\n');
  console.log(data);
});
