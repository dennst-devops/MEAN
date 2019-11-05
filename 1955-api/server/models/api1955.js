const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/api1955s_db');

const Api1955Schema = new mongoose.Schema({
    name: { type: String },
}, { timestamps: true })
const Api1955 = mongoose.model('Api1955', Api1955Schema);
module.exports = Api1955;