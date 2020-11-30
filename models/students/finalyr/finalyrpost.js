const mongoose = require("mongoose")


const finalyruploadmodel = mongoose.Schema({
    studentName : {
        type : String,
        required : true
    },
    regNo : {
        type : Number,
        required : true
    },
    sec : {
        type : String,
        required : true
    },
    year : {
        type: String,
        required : true
    },
    peFour : 
    {
        type : String,
        required : true
    },
    peFive : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model("finalyearposts", finalyruploadmodel)