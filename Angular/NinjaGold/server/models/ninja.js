const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/ninja_gold_db');

const GoldSchema = new mongoose.Schema({
    log: {type:String},
    amount: {type: Number},
})
const Gold = mongoose.model("Gold", GoldSchema);
module.exports = Gold;