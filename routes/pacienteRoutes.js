//requerimmiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const {ObtenerPacientes,obtenerUnPaciente,CrearPaciente,modificarPaciente,borrarPaciente}=require('../controllers/pacienteController')
//crear la ruta
const pacienteRuta=Router()
//usar las rutas
pacienteRuta
            .get('/',ObtenerPacientes)
            .post('/crear',CrearPaciente)
            .get('/:id',obtenerUnPaciente)
            .put('/:id',modificarPaciente)
            .delete('/:id',borrarPaciente)

module.exports= pacienteRuta