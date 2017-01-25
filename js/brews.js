'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.create = function (app) { 
    app.post("/api/brews/create", function(req, res) {

    //console.log(req.body);
    //console.log(req.body.brewEmoticonId);
    //console.log(req.headers);
    //console.log(req.headers["x-barista-auth"]);

    if (!req.headers["x-barista-auth"] || 
        req.headers["x-barista-auth"].length == 0){
        
       return  res.send("{\"result\": -2}");
    } 

    if (!fileUtils.isString(req.body.brewEmoticonId)){
        return  res.send("{\"result\": -1}");
    }

    fileUtils.sendFile(req.originalUrl, res);
});
};