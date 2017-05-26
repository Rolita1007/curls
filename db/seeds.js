var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/curls');

var User = require('../models/user');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
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
      description: "Not hard to maintain"
    },
    {
      name: "BounceCurl",
      description: "Works for all hair types"
    },
    {
      name: "Curls",
      description: "Best thing that ever happened in the universe"
    }
  ]
});

var paola = new User({
  first_name: 'Paola',
  last_name: 'Martinez',
  typeOfCurl: '3A',
  products: [{name: "Let's get this frizz taken care of!"}]
});

var monica = new User({
  first_name: 'Monica',
  last_name: 'Brown',
  typeOfCurl: '3B',
  products: [{name: "So many products to choose from"}]
});

//products
var deva = new Items({
  name: 'Devacurl',
  product: "poo Co-wash",
});

var bounce = new Items({
  name: 'bounceCurl',
  product: 'Aloe vera gel'
});

var frizzCurls = new Items({
  name: 'curls',
  product: 'Blueberry Leavin-in-Conditioner',
});

//save users
claudia.save(function(err){
  if (err)
    console.log(err);
    return;
  }
    console.log('User created!');
});

paola.save(function(err){
  if (err)
    console.log(err);
    return:
  }
    console.log('User created!');
});

monica.save(function(err){
  if (err)
    console.log(err);
    return;
  }
    console.log('User created!');
});

//save products
deva.save(function(err){
  if (err)
    console.log(err);
    return;
  }
    console.log('Product created!');
});

bounce.save(function(err){
  if (err)
    console.log(err);
    return;
  }
    console.log('Product created!');
});

frizzCurls.save(function(err){
  if (err)
    console.log(err);
    return;
  }
    console.log('Product created!');
});






