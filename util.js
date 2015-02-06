var fs = require('fs');
var path = require('path');

exports.readFile = function (fileName, callback) {
    var filePath = path.join(__dirname, 'samples/' + fileName);
    fs.readFile(filePath, {encoding: 'utf-8'}, callback);
}

exports.writeFile = function (fileName, content, callback) {
    var filePath = path.join(__dirname, 'output/' + fileName);
    fs.writeFile(filePath, content, function (err) {
        if(err) {
            console.log(err);
        }
    });
}
