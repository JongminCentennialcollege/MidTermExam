const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    
    name: String,
    age: Number,
    major: String,
    grade: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Student',StudentSchema);
