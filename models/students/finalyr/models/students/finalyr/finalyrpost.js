const mongoose = require("mongoose")


const finalyruploadmodel = mongoose.Schema({
    studentName : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    regNo : {
        type : Number,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    sec : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    year : {
        type: String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    peFour : 
    {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    },
    peFive : {
        type : String,
        required : true,
        validate : [{validator: value => value, msg: 'Invalid name'}]
    }

})

module.exports = mongoose.model("finalyearposts", finalyruploadmodel)