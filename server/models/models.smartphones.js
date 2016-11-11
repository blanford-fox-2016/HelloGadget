var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var smartPhoneSchema = mongoose.Schema({
    name : String,
    os : String,
    ram : String,
    internalMemory : String,
    externalMemory : String,
    camera : String,
    price : Number,
    vendor : String,
    image : String

},{
  timestamps : true
});


var smartPhones = mongoose.model('smartPhone', smartPhoneSchema);

// make this available to our users in our Node applications
module.exports = smartPhones;
