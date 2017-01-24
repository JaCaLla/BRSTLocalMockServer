'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.login = function (app) { 
    app.post("/api/amuse/login", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};

