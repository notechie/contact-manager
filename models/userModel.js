const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: [true, "Please enter username"]
    },
    email:{
        type: String,
        require: [true, "Please enter email address"],
        unique: [true, "email already exists"]
    },
    password:{
        type: String,
        require: [true, "Please enter password"],
    }
},
{
    timestamp: true
})

module.exports = mongoose.model("User", userSchema)