const mongoose = require("mongoose")

const studentlogin = mongoose.Schema({
    studentName : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    regNo : {
        type: Number,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    pwd : {
        type : Number,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }
}) 

module.exports = mongoose.model("studentlogininfo", studentlogin)