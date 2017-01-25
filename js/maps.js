'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.home = function (app) { 
    app.get("/maps/home", function(req, res) {
    fileUtils.sendHTMLFile(req.originalUrl, res);
});
};

module.exports.cheers = function (app) { 
    app.get("/maps/cheers", function(req, res) {
    fileUtils.sendHTMLFile(req.originalUrl, res);
});
};