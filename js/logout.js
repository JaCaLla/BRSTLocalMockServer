'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.logout = function (app) {
    app.post("/api/logout", function(req, res){
        fileUtils.sendJSONFile(req.originalUrl, res);
    });
};