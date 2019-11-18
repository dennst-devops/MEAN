const MongModels = require('../models/models');
const Thing = MongModels.Thing;
const Review = MongModels.Review;
const path = require('path');

module.exports = {

    // OPTIONAL PASSING OF NEXT
    // will add a big angry error to your front end
    // getAll: (req, res, next) => {
    //     Thing.find()
    //         .then(data => res.json({message: "success", results: results.data}))
    //         .catch(err => next(err));
    // },

    getAll: (req,res) => {
        Thing.find()
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    getOneThing: (req, res) => {
        Thing.findOne({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    createThing: (req, res) => {
        console.log(req.body, "Controller")
        Thing.create(req.body, {runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}))
    },
    editThing: (req, res) => {
        Thing.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    deleteThing: (req, res) => {
        Thing.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    createReview: (req, res) => {
        Thing.findOneAndUpdate({_id: req.params.id}, {$push: {reviews:{name: req.body.name, review: req.body.review, rating: req.body.rating}}}, {runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}))
    },
    getAllReviews: (req,res) => {
        Review.find({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
}