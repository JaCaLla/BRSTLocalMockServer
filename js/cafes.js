'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.list = function (app) { 
    app.post("/api/cafes/list", function(req, res) {

    //console.log(req.body);
    //console.log(req.body.brewEmoticonId);
    //console.log(req.headers);
    //console.log(req.headers["x-barista-auth"]);

    if (!req.headers["x-barista-auth"] || 
        req.headers["x-barista-auth"].length == 0){
        
       return  res.send("{\"result\": -2}");
    } 

    if (!req.body["north"] ||
        !fileUtils.isNumber(req.body["north"]) ||
        !req.body["south"] ||
        !fileUtils.isNumber(req.body["south"]) ||
        !req.body["east"] ||
        !fileUtils.isNumber(req.body["east"]) ||
        !req.body["west"] ||
        !fileUtils.isNumber(req.body["west"])){
        return  res.send("{\"result\": -1}");
    }

    fileUtils.sendFile(req.originalUrl, res);
});
};