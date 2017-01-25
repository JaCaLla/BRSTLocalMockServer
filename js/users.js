'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.friends = function (app) { 
    app.post("/api/users/friends", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};


module.exports.cheers = function (app) { 
    app.post("/api/users/cheers", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};

module.exports.ranking = function (app) { 
    app.post("/api/users/ranking", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};

module.exports.get = function (app) { 
    app.post("/api/users/get", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};

module.exports.search = function (app) { 
    app.post("/api/users/search", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};