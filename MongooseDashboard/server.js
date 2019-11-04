const express = require("express");
const app = express();
const session = require('express-session');
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

const flash = require('express-flash');

app.use(flash());
const mongoose = require('mongoose');
// fix deprication warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/critters_db')

mongoose.Promise = global.Promise;

const CritterSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    age: { type: Number, required: true, minlength: 1 },
    color: { type: String, required: true, minlength: 3 }
}, { timestamps: true })
const Critter = mongoose.model('Critter', CritterSchema);


// POST '/critters/destroy/:id' Should delete the critter from the database by ID.
app.post('/critters/destroy/:id', function(request, response) {
    Critter.deleteOne({ _id: request.params.id }, function (err, critter) {
        console.log("successfully deleted a critter");
        response.redirect('/');
    })
});

// GET '/critters/edit/:id' Should show a form to edit an existing critter.
app.get('/critters/edit/:id', (request, response) => {
    var critters_array = Critter.findOne({ _id: request.params.id }, function (err, critters) {
        response.render('edit', { critters_array: critters });
    })
});

// POST '/critters/:id' Should be the action attribute for the form in the above route (GET '/critters/edit/:id').
app.post('/critters/:id', function (request, response) {
    Critter.updateOne({ _id: request.params.id }, {
        name: request.body.ht_name,
        age: request.body.ht_age,
        color: request.body.ht_color
    },
        function (err, critter) {
            if (err)
                console.log("Error matching DB request");
            else
                console.log('successfully updated a critter!');
                response.redirect("/critters/" + request.params.id);
        });
});

// GET '/critters/new' Displays a form for making a new critter.
app.get('/critters/new', (request, response) => {
    response.render('new');
});

// POST '/critters' Should be the action attribute for the form in the above route (GET '/critters/new').
app.post('/critters', (request, response) => {
    var critter = new Critter({ name: request.body.ht_name, age: request.body.ht_age, color: request.body.ht_color });
    critter.save(function (err) {
        if (err) {
            console.log('error hit on update!');
            console.log(critter.errors);
            response.render('index', { errors: critter.errors })
        }
        else {
            console.log('successfully added a critter!');
            response.redirect('/');
        }
    })
});

// GET '/critters/:id' Displays information about one critter.
app.get('/critters/:id', (request, response) => {
    var critters_array = Critter.findOne({ _id: request.params.id }, function (err, critters) {
        response.render('critter', { critters_array: critters });
    })
});

// GET '/' Displays all of the critters.
app.get('/', (request, response) => {
    var critters_array = Critter.find({}, function (err, critters) {
        response.render('index', { critters_array: critters });
    })
});


