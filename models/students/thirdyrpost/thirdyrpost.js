const mongoose = require("mongoose")

const thirdyrpostmodel = mongoose.Schema({
    studentName : {
        type : String,
        required : true
    },
    regNo : {
        type: Number,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    sec : {
        type : String,
        required : true
    },
    peOne : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("thirdyrpost", thirdyrpostmodel)