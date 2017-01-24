'use strict';

var fs = require('fs');

var jsonFolderPath = "/json";

module.exports.sendFile = function (originalUrl, res) {

    var filePath = __dirname + jsonFolderPath + originalUrl + ".json";

   // console.log("filepath:" + filePath);

    fs.readFile(filePath, 'utf8', function(err, data) {
        //console.log(data);
        res.send(JSON.parse(data));
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