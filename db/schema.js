var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ItemSchema = new Schema({
  name: String,
  description: String
});

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  typeOfCurl: String,
  hairProduct: [ItemSchema]
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  User: UserModel,
  Item: ItemModel
};
