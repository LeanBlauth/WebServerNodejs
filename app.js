var http = require('http');
var fs = require('fs');

// Executed when a requests event happens
http.createServer(function(req, res) {
    
    // Builds the http header
    res.writeHead(200, { 'Content-Type': 'text/html'} );
    // Gets html content from file and pipe it to response
    fs.createReadStream(__dirname + '/index.htm', 'utf-8').pipe(res);

}).listen(1337, '127.0.0.1');