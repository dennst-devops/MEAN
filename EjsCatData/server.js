const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.get('/', (request, response) => {
//     response.send("Hello Express");
// });
app.get('/cars', (request, response) => {
    response.render('cars');
});
app.get('/cats', (request, response) => {
    response.render('cats');
});
app.get('/cars/new', (request, response) => {
    response.render('form');
});

app.get("/ugly", (req, res) => {
    // hard-coded user data
    var cat_array = [
        {name: "Ugly cat", age: "8", picture: "cat1.jpg"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/boxy", (req, res) => {
    // hard-coded user data
    var cat_array = [
        {name: "Boxy cat", age: "5", picture: "cat2.jpg"}, 
    ];
    res.render('details', {cats: cat_array});
})