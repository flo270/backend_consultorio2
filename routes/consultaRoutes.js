//requerimiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const {ObtenerConsultas,ObtenerUnConsulta,CrearConsulta,modificarConsulta,borrarConsulta}=require('../controllers/consultaController')
//crear la ruta
const consultaRuta=Router()
//usar las rutas
consultaRuta
            .get('/',ObtenerConsultas)
            .post('/crear',CrearConsulta)
            .get('/:id',ObtenerUnConsulta)
            .put('/:id',modificarConsulta)
            .delete('/:id',borrarConsulta)

module.exports= consultaRuta