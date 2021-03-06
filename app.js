const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyparser = require('body-parser')
const cors = require('cors')
require("dotenv/config")




app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
app.use(cors())

const studentloginroute = require("./routes/users/login")
const thirdyrroute = require("./routes/users/thirdyr.js/thirdyrpostroute")
const finalyrroute = require('./routes/users/finalyr/finalyrpost')

app.use('/students',studentloginroute)
app.use('/students/thirdyr',thirdyrroute)
app.use("/students/finalyr",finalyrroute)


app.get('/',(req,res)=> {
    res.send("working biatch")
})

url ="mongodb+srv://admin:admin@api-shop.edmom.mongodb.net/antenna?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology : true},()=> {console.log("connected to db")}
)

app.set('port', process.env.PORT || 4200)



app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))

