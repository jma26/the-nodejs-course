env = process.env.NODE_ENV || 'development';
var config = {
  development: {
    port: 3000,
    db: 'mongodb://localhost/mydb',
    prettyHtml: true
  },
  production: {
    port: process.env.PORT || 5000,
    db: 'mongodb://mongolab.com/mydb',
    prettyHtml: false
  }
};

console.log(process.argv);

module.exports = config[env];