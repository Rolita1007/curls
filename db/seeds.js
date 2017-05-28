var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/curls');

var User = require('../models/user');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

User.remove({}, function(err){
  console.log(err);
});

Item.remove({}, function(err){
  console.log(err);
});

//create new users
var claudia = new User({
  first_name: 'Claudia',
  last_name: 'Mercado',
  typeOfCurl: '2C',
  product: [
    {
      name: "DevaCurl",
      description: "Set it Free"
    },
    {
      name: "BounceCurl",
      description: "Aloe Vera Gel"
    },
    {
      name: "Curls",
      description: "Blueberry Leave in Conditioner"
    }
  ]
});

var paola = new User({
  first_name: 'Paola',
  last_name: 'Martinez',
  typeOfCurl: '3A',
  product: [
    {
      name: "SheaMoisture",
      description: "Curl Enhancing"
    },
    {
      name: "Moroccaan",
      description: "Curling Perfection Defining Cream"
    },
    {
      name: "Garnier",
      description: "Triple Nutrition Curl Nourish Leave"
    }
  ]
});

var elizabeth = new User({
  first_name: 'Elizabeth',
  last_name: 'Brown',
  typeOfCurl: '3B',
  product: [
    {
      name: "Cantu",
      description: "Curl Activator Cream"
    },
    {
      name: "Curls",
      description: "Blueberry Hair Mask"
    },
    {
      name: "Curls",
      description: "Blissful lengths liquid hari growth vitamin"
    }
  ]
});

//save users
claudia.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('user created!');
});

paola.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('user created!');
});

elizabeth.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('user created!');
});







