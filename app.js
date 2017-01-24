'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')
var fileUtils = require('./fileUtils.js');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))


var notifications = require('./notifications.js');
notifications.count(app);

var machines = require('./machines.js');
machines.list(app);

var beacons = require('./beacons.js');
beacons.list(app);

var brews = require('./brews.js');
brews.create(app);

var cafes = require('./cafes.js');
cafes.list(app);

var cheers = require('./cheers.js');
cheers.create(app);
cheers.list(app);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('what-get???', 404);
});

app.post('*', function(req, res){

    var response = "{\"result\": -2, \"message\": \"Unkown path "+ req.url + "\"}";

    console.log(response);
    res.status(404).send(response);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});