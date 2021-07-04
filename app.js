var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var mongoose = require('mongoose');

mongoose.connect
('mongodb+srv://rudolphDB:9999@rudolphcluster.eluhz.mongodb.net/NorthPoleDB?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var rudolph = Person({
    firstname: 'Rudolph',
    lastname: 'Reindeer',
    address: '42069 North Pole St.'
});

rudolph.save(function(err) {
    if (err) throw err;
    console.log('person saved!');
});

var treetrunks = Person({
    firstname: 'Mrs. Tree',
    lastname: 'Trunks',
    address: '314 Tree Trunks St.'
});

treetrunks.save(function(err) {
    if (err) throw err;
    console.log('person saved!');
});

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    
    console.log('Request URL: ' + req.url);
    
    // Get all the users
    Person.find({}, function(err, users){
        if (err) throw err;
        // Object of all the users
        console.log(users);
    });

    next();
});

htmlController(app);

apiController(app);

app.listen(port);