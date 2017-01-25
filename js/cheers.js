'use strict';

var fileUtils = require('./fileUtils.js');

module.exports.create = function (app) { 
    app.post("/api/cheers/create", function(req, res) {

    if (!req.headers["x-barista-auth"] || 
        req.headers["x-barista-auth"].length == 0){
        
       return  res.send("{\"result\": -2}");
    } 

        if (!req.body["accountUuid"] ||
        !fileUtils.isNumber(req.body["accountUuid"]) ||
        !req.body["cheersMessageId"] ||
        !fileUtils.isString(req.body["cheersMessageId"]) ||
        !req.body["cheersEmoticonId"] ||
        !fileUtils.isString(req.body["cheersEmoticonId"])){
        return  res.send("{\"result\": -1}");
    }

    fileUtils.sendFile(req.originalUrl, res);
});
};


module.exports.list = function (app) { 
    app.post("/api/cheers/list", function(req, res) {

    if (!req.headers["x-barista-auth"] || 
        req.headers["x-barista-auth"].length == 0){
        
       return  res.send("{\"result\": -2}");
    } 

    if (!req.body["limit"] ||
        !fileUtils.isNumber(req.body["limit"]) ||
        !req.body["cheersFilterType"] ||
        !fileUtils.isString(req.body["cheersFilterType"])){
        return  res.send("{\"result\": -1}");
    }

    if (!(req.body["cheersFilterType"]==="Sent") &&
    !(req.body["cheersFilterType"]==="SentReply") &&
    !(req.body["cheersFilterType"]==="Received") &&
    !(req.body["cheersFilterType"]==="ReceivedReply") ){
        return  res.send("{\"result\": -1}");
    }


    fileUtils.sendFile(req.originalUrl, res);
});
};