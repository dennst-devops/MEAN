const express = require("express");
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.listen(8000, () => console.log("listening on port 8000"));


app.use(express.static( __dirname + '/public/dist/public' ));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/routes.js')(app);
