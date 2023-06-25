const mongoose = require("mongoose");

// to create a structure of database's record/document
const userSchema = mongoose.Schema({
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
    }
});

// to create a User model for collection of documents
const User = mongoose.model("User", userSchema); // returns a constructor object

module.exports = User;
