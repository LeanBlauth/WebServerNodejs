module.exports = function(app) {

    app.get('/api/person/:id', function(req, res){
        // Get the data from the database
        res.json({ firstname: "Rudolph", lastname: "Reindeer" });
    });

    app.post('/api/personjson', function(req, res) {
        // Save to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        // Delete from the database 
    });
    
}