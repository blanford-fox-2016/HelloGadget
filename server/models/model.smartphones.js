var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var smartPhoneSchema = mongoose.Schema({
    name : { type: String, unique: true },
    os : String,
    ram : Number,
    internalMemory : Number,
    externalMemory : Number,
    camera : Number,
    price : Number,
    vendor : String

},{
  timestamps : true
});


var smartPhone = mongoose.model('smartPhone', smartPhoneSchema);

// make this available to our users in our Node applications
module.exports = smartPhone;
