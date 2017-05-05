var express = require('express');
var mongoose = require('mongoose');
var Gem = require('./models/user');
var bodyParser = require('body-parser');

var app = express();
var port = 3002;

app.use(bodyParser.json());
// urlencoded

// mongodb local, default port, name of our database
mongoose.connect('mongodb://localhost:27017/nifflerDB');

app.get('/gem', function(req, res) {
  // select/read
  Gem.find({}, function(err, gemResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('gemResults ->', gemResults);
      res.send(gemResults);
    }
  });
});

app.post('/gem', function(req, res) {
  console.log('in gems post ->', req.body);

  var newGem = new Gem({
    name: req.body.name,
    type: req.body.type,
    value: req.body.value,
    rare: req.body.rare,
    date: req.body.date
  });

  // insert/create
  newGem.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new gem created');
      res.sendStatus(201);
    }
  });
});

app.listen(port, function() {
  console.log('server up and running on port: ', port);
});
