var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  age: Number,
  email: String
})

person = mongoose.model('Person', PersonSchema);

module.exports = person;