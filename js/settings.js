'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.get = function (app) { 
    app.post("/api/settings/get", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};

module.exports.update = function (app) { 
    app.post("/api/settings/update", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};