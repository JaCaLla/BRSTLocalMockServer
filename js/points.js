'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.get = function (app) { 
    app.post("/api/points/get", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};

