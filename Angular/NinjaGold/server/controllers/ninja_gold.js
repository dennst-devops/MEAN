const Ninja = require('../models/ninja.js');


module.exports = {
    index: function (req, res) {
        if (req.session.count) {
            req.session.count += 1;
        }
        else {
            req.session.count = 1 
        }
        res.render('index', {count: req.session.count});
    }
};