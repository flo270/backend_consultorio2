//requerimmiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    deleteUser,
    modifyUser
}= require('../controllers/userController')
//requerir jwt validacion
const {jwtValidacion}= require('../middlewares/jwtValidacion')
//crear la ruta
const userRuta = Router()

//uso de la ruta usuario
userRuta.get('/',jwtValidacion,getUsers)
userRuta.post('/login',loginUser)
userRuta.post('/',createUser)
userRuta.get("/:id",jwtValidacion,getUserById)
userRuta.put("/:id",jwtValidacion,modifyUser)
userRuta.delete("/:id",jwtValidacion,deleteUser)

      

module.exports = userRuta
