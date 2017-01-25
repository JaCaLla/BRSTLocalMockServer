'use strict';

var fs = require('fs');

var jsonFolderPath = "/../json";
var htmlFolderPath = "/../html";

module.exports.sendJSONFile = function (originalUrl, res) {

    var filePath = __dirname + jsonFolderPath + originalUrl + ".json";

    sendFile(filePath,res,{'Content-Type': 'application/json; charset=UTF-8'});
};

module.exports.sendHTMLFile = function (originalUrl, res) {

   var filePath = __dirname + htmlFolderPath + originalUrl + ".html";

   sendFile(filePath,res,{'Content-Type': 'text/html; charset=UTF-8'});
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

// Private/Internal
function sendFile(filePath,res,contentType){
      
    //  console.log("filepath:" + filePath);
       fs.readFile(filePath, 'utf8', function(err, data) {
     //   console.log(data);
        res.writeHead(200, contentType);
        res.end(data)
    }); 
}