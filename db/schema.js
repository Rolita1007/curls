var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ItemSchema = new Schema({
  name: String
});

var UserSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  typeOfCurl: String,
  items: [ItemSchema]
});

var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  User: UserModel,
  Item: ItemModel
};
