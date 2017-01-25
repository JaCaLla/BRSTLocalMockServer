'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.login = function (app) { 
    app.post("/api/twitter/login", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};