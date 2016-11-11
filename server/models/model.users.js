var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    username : { type: String, unique: true },
    password : String,
    email : String
},{
  timestamps : true
});


var users = mongoose.model('users', userSchema);

// make this available to our users in our Node applications
module.exports = users;
