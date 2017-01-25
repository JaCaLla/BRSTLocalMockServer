'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.count = function (app) { 
    app.post("/api/notifications/count", function(req, res) {

/*
    if (!req.headers["x-barista-auth"] || 
        req.headers["x-barista-auth"].length == 0){
        
       return  res.send("{\"result\": -2}");
    } 

    if (!fileUtils.isString(req.body.brewEmoticonId)){
        return  res.send("{\"result\": -1}");
    }
*/

    fileUtils.sendFile(req.originalUrl, res);
});
};

module.exports.list = function (app) {
    app.post("/api/notifications/list", function(req, res){
        fileUtils.sendFile(req.originalUrl, res);
    });
};

module.exports.read = function (app) {
    app.post("/api/notifications/read", function(req, res){
        fileUtils.sendFile(req.originalUrl, res);
    });
};