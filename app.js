var http = require('http');
var fs = require('fs');

// Executed when a requests event happens
http.createServer(function(req, res) {
    
    // Builds the http header
    res.writeHead(200, { 'Content-Type': 'text/html'} );
    // Gets html content from file
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf-8');
    var message = 'Hello I am Rudolph the reindeer'
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');