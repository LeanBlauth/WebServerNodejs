var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send(   '<html><head></head><body></body><h1>' +
                'Hi my name is Rudolph!' +
                '</h1></html>')
});

app.get('/person/:id', function(req, res){
    res.send(   '<html><head></head><body></body><h1>' +
                'Person: ' +
                req.params.id +
                '</h1></html>')
});

app.get('/api', function(req, res){
    res.json({ firstname: "Rudolph", lastname: "Reindeer" });
});

app.listen(port);