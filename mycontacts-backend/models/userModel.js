const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, 'Please provide a username']
    },
    email:{
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already exists']
    },
    password:{
        type: String,
        required: [true, 'Please provide a password']
    }
})

module.exports = mongoose.model('User', userSchema);