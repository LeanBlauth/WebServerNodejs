var http = require('http');
var fs = require('fs');

// Executed when a requests event happens
http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json'} );
    var obj = {
        firstname: 'Rudolph',
        lastname: 'Reindeer'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');