var mongoose = require('mongoose');
var Schema = require("../db/schema");

mongoose.Promise = global.Promise;

// var UserSchema = new Schema({
//   first_name: String,
//   last_name: String,
//   typeOfCurl: String,
//   items: String,
// });

// UserSchema.pre('save', function(next){
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });

var User = Schema.User;
module.exports = User;
