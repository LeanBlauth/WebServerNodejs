var express = require('express');
var app = express();

app.use(express.urlencoded({ extended:false}));
app.use(express.json());

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

htmlController(app);

apiController(app);

app.listen(port);