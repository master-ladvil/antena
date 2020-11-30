const router = require("express").Router()
const { find } = require("../../../models/students/finalyr/finalyrpost")
const finalmod = require("../../../models/students/finalyr/finalyrpost")
const verify = require('../../../verify/tokenverify')


router.get("/", async(req,res) => {
    try{
        const findallfourthyr = await finalmod.find()
        res.json(findallfourthyr)
    }catch(err){res.json({message : err})}
})


router.get("/sec/:secId" , async(req,res) => {
    try{
    const findsec = await finalmod.find({sec : req.params.secId})
    res.json(findsec)
    }catch(err){res.json({message : err})}
})

router.post("/",verify, async(req,res) => {
    const newfinal = new finalmod({
        studentName : req.body.studentName,
        regNo : req.body.regNo,
        sec : req.body.sec,
        year : req.body.year,
        peFour : req.body.peFour,
        peFive : req.body.peFive
    })
    try{

        const upfinal = await newfinal.save()
        res.json(upfinal)

    }catch(err){res.json({message : err})}
})


module.exports = router