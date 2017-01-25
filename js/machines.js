'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.list = function (app) { 
    app.post("/api/machines/list", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};