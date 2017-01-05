var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config.json');

var carsController = require('./controllers/cars_controller');
var cartController = require('./controllers/cart_controller');

var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.use(function (req, res, next) {
  console.log(req.path);
  next();
});

app.get('/cars', carsController.index);
app.get('/cars/:id', carsController.show);
app.post('/cars', carsController.create);
app.put('/cars/:id', carsController.update);
app.delete('/cars/:id', carsController.destroy);

app.get('/cart', cartController.index);
app.post('/cart', cartController.create);

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
