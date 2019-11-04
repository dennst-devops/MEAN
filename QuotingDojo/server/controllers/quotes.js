// All necessary requires, such as the Quote model.
const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')

module.exports = {
    index: function(req, res) {
        res.render('index');
    },
    create: function(req, res) {
        var quote = new Quote({ name: req.body.ht_name, quote: req.body.ht_quote });
        quote.save(function (err) {
            if (err) {
                console.log('error hit on update!');
                console.log(quote.errors);
                res.render('index', { errors: quote.errors })
            }
            else {
                console.log('successfully added a quote!');
                res.redirect('/quotes');
            }
        })
    },
    findall: function(req, res) {
        var quotes_array = Quote.find({}).sort('-createdAt').exec(function (err, quotes) {
            res.render('quotes', { quotes_array: quotes });
        })
    }
};