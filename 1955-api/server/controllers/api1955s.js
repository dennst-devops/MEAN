const Api1955 = require('../models/api1955.js');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    findall: function (req, res) {
        Api1955.find({})
            .then(api1955s => res.json(api1955s))
            .catch(err => res.json(err));
    },
    new: function (req, res) {
        Api1955.create({name: req.params.name})
            .then(api1955s => res.json(api1955s))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        Api1955.deleteOne({name: req.params.name}) // or remove to remove all
            .then(api1955s => res.json(api1955s))
            .catch(err => res.json(err));
    },
    display: function (req, res) {
        Api1955.findOne({name: req.params.name}) // or find
            .then(api1955s => res.json(api1955s))
            .catch(err => res.json(err));
    }
};