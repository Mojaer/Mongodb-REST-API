const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,

    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("Usermodel", UserSchema)

module.exports = User