var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    port: 8080,
    prettyHtml: true
  },
  production: {
    port: process.env.PORT || 5000,
    prettyHtml: false
  }
};

module.exports = config[env];