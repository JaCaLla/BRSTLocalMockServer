'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.list = function (app) { 
    app.post("/api/recipes/list", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};

module.exports.update = function (app) { 
    app.post("/api/recipes/update", function(req, res) {

    fileUtils.sendJSONFile(req.originalUrl, res);
});
};
