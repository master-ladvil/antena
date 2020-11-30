const mongoose = require("mongoose")

const thirdyrpostmodel = mongoose.Schema({
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
    year : {
        type : Number,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    sec : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    peOne : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }
})

module.exports = mongoose.model("thirdyrpost", thirdyrpostmodel)