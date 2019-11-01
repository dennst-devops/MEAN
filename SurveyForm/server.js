const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const session = require('express-session');
app.use (express.urlencoded({extended:true}))
// app.get('/', (request, response) => {
//     response.send("Hello Express");
// });

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get('/', (request, response) => {
    response.render('index');
});
app.post('/result', (request, response) => {
    response.render('results', {es_name: request.body.ht_name, es_loc: request.body.ht_location,
        es_lang: request.body.ht_language, es_comment: request.body.message});
});
