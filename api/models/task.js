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
    timeFrom: {
        type: String,
        required: [true, 'must provide time'],
        trim: true,
    },
    timeTo: {
        type: String,
        required: [true, 'must provide time'],
        trim: true,
    },
    userID:{
        type: String,
        require: true,
        trim: true
    },
    dateID:{
        type:String,
        require:true,
        trim: true
    }
});




module.exports = mongoose.model('Task', TaskSchema);    // Task is the name of the collection in the database