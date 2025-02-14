const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema 
const UserSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    hostel:{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('user' , UserSchema)
