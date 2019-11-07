const Thing = require('../models/thing.js');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    findall: function (req, res) {
        Thing.find({})
            .then(things => res.json(things))
            .catch(err => res.json(err));
    },
    new: function (req, res) {
        Thing.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(things => res.json(things))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        Thing.deleteOne({_id: req.params.id}) // or remove to remove all
            .then(things => res.json(things))
            .catch(err => res.json(err));
    },
    display: function (req, res) {
        Thing.findOne({_id: req.params.id}) // or find
            .then(things => res.json(things))
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        Thing.updateOne({_id: req.params.id}, {title: req.body.title, description: req.body.description, completed: req.body.completed}) // or find
            .then(things => res.json(things))
            .catch(err => res.json(err));
    }
};