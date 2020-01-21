let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    password: /*sha256*/ { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false
    }
})

let userModel = mongoose.model('User', userSchema)
module.exports = userModel