const { Router } = require("express")

const router = require("express").Router()
const thirdmod = require("../../../models/students/thirdyrpost/thirdyrpost")
const verify = require("../../../verify/tokenverify")

router.get('/', async (req,res) => {
    try{
        const allpoststhird = await thirdmod.find()
        res.json(allpoststhird)
    }catch(err){res.json({message : err})}
})

router.get('/sec/:secId' , async(req,res) => {
    try{
    const getsec = await thirdmod.find({sec : req.params.secId})
    res.json(getsec)
    }catch(err){res.json({message:err})} 
})

router.post('/',verify, async(req,res) => {
    const newthird = new thirdmod({
        studentName : req.body.studentName,
        regNo : req.body.regNo,
        class : req.body.class,
        sec : req.body.sec,
        year : req.body.year,
        peOne : req.body.peOne
    })
    try{
        const upthird = await newthird.save()
        res.json(upthird)
    }catch(err){res.json({ message : err})}
})

module.exports = router