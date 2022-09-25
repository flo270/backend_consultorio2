//requerir router de express
const {Router} = require('express')
//requerir el controlador
const {obtenerImagenes,crearImagen,borrarImg,modificarImg} = require('../controllers/imagenController')
//crear ruta
const ImgRuta= Router()
//usar ruta
ImgRuta
        .get('/',obtenerImagenes)
        .post('/crear',crearImagen)
        .delete('/:id',borrarImg)
        .put('/:id',modificarImg)

        module.exports = ImgRuta