//requerir router de express
const {Router} = require('express')
//requerir el controlador
const {obtenerInfoes,crearInfo,borrarInfo,modificarInfo,ObtenerInfoOne} = require('../controllers/infoController')
//crear ruta
const InfoRuta= Router()
//usar ruta
InfoRuta
        .get('/',obtenerInfoes)
        .post('/crear',crearInfo)
        .delete('/:id',borrarInfo)
        .put('/:id',modificarInfo)
        .get('/:id',ObtenerInfoOne)

        module.exports = InfoRuta