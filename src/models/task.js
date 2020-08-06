const mongoogse = require('mongoose');
const Schema = mongoogse.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoogse.model('tasks', TaskSchema);