const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
const session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.get('/', function (req, res) {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    console.log(req.session.count);
    res.render('index', {count: req.session.count});
});

app.get('/add2', function (req, res) {
    req.session.count += 1;
    res.redirect('/');
});

app.get('/reset', function (req, res) {
    req.session.count = 0;
    res.redirect('/');
});