const api1955s = require('../controllers/api1955s.js');

module.exports = function (app) {
    // GET '/' will serve up the full collection of people born in 1955
    app.get('/', api1955s.findall );


    // GET '/new/:name/' will add a name into the database. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
    app.get('/new/:name/', api1955s.new );
    
    // GET '/remove/:name/' will delete a name from the database.
    app.delete('/remove/:name/', api1955s.remove );

    // GET '/:name' will bring up the document of that particular person.
    app.get('/:name', api1955s.display );
}
