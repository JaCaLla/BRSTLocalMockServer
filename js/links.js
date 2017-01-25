'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.troubleshooting = function (app) { 
    app.get("/links/troubleshooting", function(req, res) {


    fileUtils.sendHTMLFile(req.originalUrl, res);
});
};

module.exports.news_latest = function (app) { 
    app.get("/links/news_latest", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};