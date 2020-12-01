  
const jwt = require("jsonwebtoken")
const SECRET_TOKEN_STUD = "billie"

module.exports = function(request,res,next){
    const token = request.header('auth-token')
    if (!token) return res.status(401).send("access Denied!")

    try{
        const verified = jwt.verify(token,SECRET_TOKEN_STUD)
        request.user = verified
        next()
    }catch(err){res.send("invalid TOken")}
}