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
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/quotes_db')


const QuoteSchema = new mongoose.Schema({
    name: { type: String },
    quote: { type: String }
}, { timestamps: true })
const Quote = mongoose.model('Quote', QuoteSchema);

require('./server/config/routes.js')(app);
