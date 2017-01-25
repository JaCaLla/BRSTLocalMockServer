'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.troubleshooting = function (app) { 
    app.get("/links/troubleshooting", function(req, res) {


    fileUtils.sendHTMLFile(req.originalUrl, res);
});
};