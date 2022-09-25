const jwt= require('jsonwebtoken')
const jwtValidacion= async(req,res,next)=>{
    const token = req.headers['access-token']
    const secret= process.env.SECRET_KEY || intentofree
   if (token) {
     jwt.verify(token,secret,(error)=>{
        if (error) {
            res.status(401).json('token invalido',error)
        } else {
            next()
        }
     })
   } else {
    res.status(401).json('token invalido, trate de nuevo')
   }
}
module.exports={jwtValidacion}