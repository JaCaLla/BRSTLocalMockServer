'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')
var fileUtils = require('./js/fileUtils.js');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))



var machines = require('./js/machines.js');
machines.list(app);

var beacons = require('./js/beacons.js');
beacons.list(app);
beacons.rssi(app);

var amuse = require('./js/amuse.js');
amuse.login(app);

var settings = require('./js/settings.js');
settings.get(app);
settings.update(app);

var customization = require('./js/customization');
customization.get(app);

var users = require('./js/users');
users.friends(app);
users.cheers(app);
users.ranking(app);
users.get(app);
users.search(app);

var facebook = require('./js/facebook.js');
facebook.login(app);

var twitter = require('./js/twitter.js');
twitter.login(app);

var recipes = require('./js/recipes');
recipes.list(app);
recipes.update(app);

var points = require('./js/points');
points.get(app);

var brews = require('./js/brews.js');
brews.create(app);

var cafes = require('./js/cafes.js');
cafes.list(app);

var cheers = require('./js/cheers.js');
cheers.create(app);
cheers.list(app);

var notifications = require('./js/notifications.js');
notifications.count(app);
notifications.list(app);
notifications.read(app);

var links = require('./js/links.js');
links.troubleshooting(app);
links.news_latest(app);

var maps = require('./js/maps.js');
maps.home(app);
maps.cheers(app);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
   console.log("UNDEFINED GET MEHTOD ----------------------------------------------------------------------")
   console.log("URL-PATH:"+req.url);
   console.log("BODY:"+JSON.stringify(req.body));

    var response = "{\"result\": -2, \"message\": \"Unkown path "+ req.url + "\"}";
    res.status(404).send(response);
});

app.post('*', function(req, res){
   console.log("UNDEFINED POST MEHTOD ----------------------------------------------------------------------")
   console.log("URL-PATH:"+req.url);
   console.log("BODY:"+JSON.stringify(req.body));

    var response = "{\"result\": -2, \"message\": \"Unkown path "+ req.url + "\"}";
    res.status(404).send(response);
});

app.listen(3000, function() {
    console.log('Barista Mock Server listening on port 3000!');
});

