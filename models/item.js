var Schema = require("../db/schema");
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// var ItemSchema = new Schema({
//   first_name: String,
//   product: String,
// });

// ItemSchema.pre('save', function(next){
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });

var Item = Schema.Item;
module.exports = Item;
