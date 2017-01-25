'use strict';

var fileUtils = require('./fileUtils.js');


module.exports.get = function (app) { 
    app.post("/api/customization/get", function(req, res) {

    fileUtils.sendFile(req.originalUrl, res);
});
};

