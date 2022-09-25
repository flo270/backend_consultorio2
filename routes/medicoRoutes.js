//requerimmiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const {ObtenerMedicos,ObtenerUnMedico,CrearMedico,modificarMedico,borrarMed}=require('../controllers/medicoController')
//crear la ruta
const medicoRuta=Router()
//usar las rutas
medicoRuta
            .get('/',ObtenerMedicos)
            .post('/crear',CrearMedico)
            .get('/:id',ObtenerUnMedico)
            .put('/:id',modificarMedico)
            .delete('/:id',borrarMed)

module.exports= medicoRuta