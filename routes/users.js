var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  User.find({})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('user/index', {
      user: user
    });
  });
});

//new user
router.get('/new', function(req, res) {
  res.render('user/new');
});

//create user
router.post('/', function(req, res) {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    typeOfCurl: req.body.typeOfCurl,
    //hairProduct: req.body.hairProduct
  });

  user.save(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('user/show', {
      user: user
    });
  });
});

//show user
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(user);
      //res.send(user);
      res.render('user/show', {
        user: user
      });
    });
});

// edit user
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('users/edit', {
      user:user
    });
  });
});

//update user
router.patch('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    typeOfCurl: req.body.typeOfCurl,
    //hairProduct: req.body.hairproduct
  }, {new: true})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('users/show', {
    user:user
    });
  });
});

// delete user
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('User deleted.');
    //res.send('User deleted.');
    res.rediret('/users');
  });
});

//item index
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  Product.find({})
  .exec(function(err, product) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(product);
    //res.send(user);
    res.render('product/index', {
      product: product
    });
  });
});

//new product
router.get('/new', function(req, res) {
  res.render('product/new');
});

//create product
router.post('/', function(req, res) {
  var product = new Product({
    name: req.body.name,
    description: req.body.description
  });

  product.save(function(err, product) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(product);
    //res.send(user);
    res.render('product/show', {
      product: product
    });
  });
});

//show product
router.get('/:id', function(req, res) {
  Product.findById(req.params.id)
    .exec(function(err, product) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(product);
      //res.send(user);
      res.render('product/show', {
        product: product
      });
    });
});

// edit product
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('users/edit', {
      user:user
    });
  });
});

//update user
router.patch('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    typeOfCurl: req.body.typeOfCurl,
    //hairProduct: req.body.hairproduct
  }, {new: true})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('users/show', {
    user:user
    });
  });
});

// delete user
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('User deleted.');
    //res.send('User deleted.');
    res.rediret('/users');
  });
});



module.exports = router;
