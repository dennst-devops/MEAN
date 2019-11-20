const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
//ONLY USE IF YOU HAVE THE CONNECTION FILE
// const config = require("../mongoose/connection");

// USE THIS IF YOU DON'T HAVE THE CONNECTION FILE
// Connection file just contains what's in one below
mongoose.connect("mongodb://localhost/globe")

// // WITH CONNECTION FILE
// mongoose.connect(config.connectionString, config.params);

// const ReviewSchema = new mongoose.Schema({
//     name: {type: String, required: [true, "Your name cannot be blank"], minlength: [3, "Names must have at least 3 characters"] },
//     review: { type: String, required: [true, "Reviews cannot be blank"], minlength: [3, "Reviews must have at least 3 characters"] },
//     rating: { type: Number, required: [true, "Comments must have a star rating"] },
// }, { timestamps: true })
// const Review = mongoose.model('review', ReviewSchema);

const ThingSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Product name cannont be blank"], minlength: [3, "Product name must have at least 3 characters"]},
    quantity: {type: Number, required: [true, "Quantity cannont be blank"], min: [0, "Quantity must be greater than or equal to zero"]},
    price: {type: Number, required: [true, "Price cannont be blank"], min: [0, "Price must be greater than or equal to zero"]},
}, {timestamps: true})

const Thing = mongoose.model('things', ThingSchema);

module.exports = {
    // Review: Review,
    Thing: Thing
}