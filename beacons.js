'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.list = function (app) { 
    app.post("/api/beacons/list", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};

module.exports.rssi = function (app) { 
    app.post("/api/beacons/rssi", function(req, res) {

    console.log(req.body);
    console.log(req.headers);
    
    fileUtils.sendFile(req.originalUrl, res);
});
};
