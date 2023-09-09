const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide title'],
        trim: true,
        maxlength: [20, 'title cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        required: [true, 'must provide time'],
        trim: true,
    }

});


module.exports = mongoose.model('Task', TaskSchema);    // Task is the name of the collection in the database