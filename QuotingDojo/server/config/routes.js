const quotes = require('../controllers/quotes.js');

module.exports = function (app) {
    app.post('/quotes', (request, response) => {
        quotes.create(request, response);
    });

    app.get('/quotes', (request, response) => {
        quotes.findall(request, response);
    });

    app.get('/', (request, response) => {
        quotes.index(request, response);
    });
}
