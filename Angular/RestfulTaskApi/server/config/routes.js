const tasks = require('../controllers/tasks.js');

module.exports = function (app) {
    // GET '/' will serve up the full collection of people born in 1955
    app.get('/', tasks.findall );

    // GET '/new/:name/' will add a name into the database. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
    app.post('/new/', tasks.new );
    
    // GET '/remove/:name/' will delete a name from the database.
    app.delete('/remove/:id/', tasks.remove );

    // GET '/:name' will bring up the document of that particular person.
    app.get('/:id', tasks.display );

    //PUT: Update a Task by ID
    app.put('/:id', tasks.update );
}
