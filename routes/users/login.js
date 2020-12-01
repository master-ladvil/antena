const express = require("express")
const router = express.Router()
const studmod = require("../../models/students/studentlogin")
const jwt = require("jsonwebtoken")
const SECRET_TOKEN_STUD = "billie"

router.get('/', async(req,res) => {
    try{
        const findallstud = await studmod.find()
        res.json(findallstud)
    }catch(err){res.json({msg : err})}
})


router.post('/signup', async (req,res) => {
    const newstud = new studmod({
        studentName : req.body.studentName,      
        regNo : req.body.regNo,
        pwd : req.body.pwd,
       
    })
    try{
        const upstud = await newstud.save()
        console.log(upstud)
        res.json(upstud)
    }catch(err){res.json({message : err})}
})


router.post('/login', async (req,res) => {

        try{
        const intercourser = await studmod.findOne({regNo : req.body.regNo})
        
        if(!intercourser){
            return res.json({status : "check regno/pwd"})
        }
        console.log(intercourser.pwd)
        console.log(req.body.pwd)
        if(intercourser.pwd != req.body.pwd){
            return res.json({status : "check regNo/password"})
            
        }
        const response = {
            studentName : intercourser.studentName,
            regNo : intercourser.regNo,
            status : "login succe5fu!!"
        }
        console.log(response.status)
        const token = jwt.sign({_id : intercourser._id}, SECRET_TOKEN_STUD)
        res.header("auth-token", token).json({token : token,response})
        console.log(token)
    }catch(err){res.json({message : err})}
        
})


module.exports = router 
