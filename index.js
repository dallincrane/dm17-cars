var express = require('express');
var bodyParser = require('body-parser');

var carsController = require('./controllers/cars_controller');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(req.path);
  next();
});

app.get('/cars', carsController.index);
app.get('/cars/:id', carsController.show);
app.post('/cars', carsController.create);
app.put('/cars/:id', carsController.update);
app.delete('/cars/:id', carsController.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port', port);
});
