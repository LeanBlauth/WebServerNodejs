module.exports = function(app) {

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

}