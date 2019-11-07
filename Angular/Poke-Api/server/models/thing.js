const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/things_db');

const ThingSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean },
}, { timestamps: true })
const Thing = mongoose.model('Thing', ThingSchema);
module.exports = Thing;