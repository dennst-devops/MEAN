const tasks = require('../controllers/tasks.js');

module.exports = function (app) {
    // GET '/' will serve up the full collection of people born in 1955
    app.get('/tasks', (req, res) => {
        tasks.findall (req, res);
    });

    // GET '/new/:name/' will add a name into the database. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
    app.post('/new/', (req, res) => {
        tasks.new (req, res);
    });
    
    // GET '/remove/:name/' will delete a name from the database.
    app.get('/remove/:id/', tasks.remove ); //works

    // GET '/:name' will bring up the document of that particular person.
    app.get('/byId/:id', tasks.display );  //works

    //PUT: Update a Task by ID
    app.post('/update/:id', tasks.update );
}
