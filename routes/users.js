var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  User.find({})
  .exec(function(err, users) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(users);
    //res.send(user);
    res.render('users/index', {
      users: users
    });
  });
});

//new user
router.get('/new', function(req, res) {
  res.render('users/new');
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
    res.render('users/show', {
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
      res.render('users/show', {
        user: user,
        userId: req.params.id
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
      user:user,
      userId: req.params.id
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
    res.redirect('/users');
  });
});

// Starting products routes

//new product
router.get('/:userId/products/new', function(req, res) {

  var userId = req.params.userId;

  res.render('products/new', {
    userId: userId
  });
});

//Add a new item
router.post('/:userId/products', function(req, res) {
  var userId = req.params.userId;

  var newProductName = req.body.name;

  User.findbyId(userId)
  exec(function(err, user) {
    user.products.push(new Product({ name: newProductName }));

    user.save(function (err) {
      if (err) {
        console.log(err);
        return;
      }

      reponse.redirect('/users/' + userId);
    })
  });
});


//remove an item

router.get('/:userId/products/:productId/delete', function(req, res) {

  var userId = req.params.userId;
  var productId = req.params.productId;

  User.findByIdAndUpdate(userId, {
    $pull: {
      products: {_products: productId}
    }
  })
  .exec(function(err, product) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/users/' + userId);
  })
});

//show edit form

router.get('/:userId/products/:productId/edit', function(req, res) {
  var userId = req.params.userId;
  var productId = req.params.productId;

  User.findById(userId)
  .exec(function (err, user) {

    var productToEdit = user.products.find(function (product) {
      return product.id === productId;
    })
    res.render(products/edit, {
      userId: userId,
      productId: productId,
      productToEdit: productToEdit
    })
  })
});

//edit an item
router.put('/userId/products/:productId', function(req, res) {
  var userId = req.params.userId;
  var productId = req.params.productId;
  var editedItemFromForm = req.body;

  User.findById(userId)
  .exec(function(err, user) {

    var productToEdit = user.products.find(function (product) {
      return product.id === productId;
    })
    productToEdit.name = editedItemFromForm.name;

    user.save(function(err, user) {
      response.redirect('/users/' + userId)
    });
  });
});



module.exports = router;
