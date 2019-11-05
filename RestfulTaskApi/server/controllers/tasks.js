const Task = require('../models/task.js');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    findall: function (req, res) {
        Task.find({})
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    new: function (req, res) {
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        Task.deleteOne({_id: req.params.id}) // or remove to remove all
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    display: function (req, res) {
        Task.findOne({_id: req.params.id}) // or find
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        Task.updateOne({_id: req.params.id}, {title: req.body.title, description: req.body.description, completed: req.body.completed}) // or find
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    }
};