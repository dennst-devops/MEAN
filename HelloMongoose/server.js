const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }))

//////////////////////////////
// order is important!!
//////////////////////////////

// mongoose require (1)
const mongoose = require('mongoose');

// mongoose connect (2)
mongoose.connect('mongodb://localhost/first_mongoose_db', { useNewUrlParser: true });

// mongoose schema and model (3)
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// mongoose model (4)
// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

// mongoose users route (5)
app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('***user created: ', newUserData))
        .catch(err => console.log(err));
    res.redirect('/');
})

// mongoose root route (6)
app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", { users: data }))
        .catch(err => res.json(err));
});