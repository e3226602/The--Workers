const { Schema, model } = require('mongoose')

const employeeScehma = Schema({
    name: {
        type: String,
        required: 'name is required',
        trim: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 10,
        required: 'Password is required',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    status: {
        type: String,
        enum: ['admin', 'worker', 'candidate'],
        default:'candidate'
    }
})
module.exports = model('employee', employeeScehma)

