const mongoose = require("mongoose")

const studentlogin = mongoose.Schema({
    studentName : {
        type : String,
        required : true
    },
    regNo : {
        type: Number,
        required : true
    },
    pwd : {
        type : Number,
        required : true,
    }
}) 

module.exports = mongoose.model("studentlogininfo", studentlogin)