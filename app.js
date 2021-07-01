var http = require('http');

// Executed when a requests event happens
http.createServer(function(req, res) {
    
    // Builds the http header
    res.writeHead(200, { 'Content-Type': 'text/plain'} );
    // Response
    res.end('Hey there whats up I wonder\n');

}).listen(1337, '127.0.0.1');