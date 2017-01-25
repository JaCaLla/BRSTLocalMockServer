'use strict';

var fs = require('fs');

var jsonFolderPath = "/../json";
var htmlFolderPath = "/../html";

module.exports.sendJSONFile = function (originalUrl, res) {

    var filePath = __dirname + jsonFolderPath + originalUrl + ".json";

    //console.log("filepath:" + filePath);

    fs.readFile(filePath, 'utf8', function(err, data) {
        // console.log(data);
        // res.send(JSON.parse(data));
        res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
        res.end(data)
    });
};

module.exports.sendHTMLFile = function (originalUrl, res) {

    var filePath = __dirname + htmlFolderPath + originalUrl + ".html";

   // console.log("filepath:" + filePath);

    fs.readFile(filePath, 'utf8', function(err, data) {
     //   console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(data)
    });
};


module.exports.isString = function (x) {
   return Object.prototype.toString.call(x) === "[object String]"
};

module.exports.isNumber = function(x){
     return !isNaN(parseFloat(x));
}


module.exports.objToString = function(obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}