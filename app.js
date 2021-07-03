var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', 
    {   ID: req.params.id,
        Qstr: req.query.qstr });
});

app.post('/person', function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
	console.log(req.body.lastname);
    next();
});

app.post('/personjson', function(req, res) {
    res.send('Thank you for the json data !');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res){
    res.json({ firstname: "Rudolph", lastname: "Reindeer" });
});

app.listen(port);