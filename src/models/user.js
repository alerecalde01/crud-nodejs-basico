const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: 'string',
        required: true,
    },
    age: {
        type: 'number',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    }

});

module.exports = mongoose.model("User", userSchema);