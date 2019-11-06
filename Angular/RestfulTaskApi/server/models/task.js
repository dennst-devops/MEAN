const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/tasks_db');

const TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean },
}, { timestamps: true })
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;