
const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')


module.exports = function (app) {
    app.post('/quotes', (request, response) => {
        var quote = new Quote({ name: request.body.ht_name, quote: request.body.ht_quote });
        quote.save(function (err) {
            if (err) {
                console.log('error hit on update!');
                console.log(quote.errors);
                response.render('index', { errors: quote.errors })
            }
            else {
                console.log('successfully added a quote!');
                response.redirect('/quotes');
            }
        })
    });

    app.get('/quotes', (request, response) => {
        var quotes_array = Quote.find({}).sort('-createdAt').exec(function (err, quotes) {
            response.render('quotes', { quotes_array: quotes });
        })
    });

    app.get('/', (request, response) => {
        response.render('index');
    });
}
