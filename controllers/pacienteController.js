//traer modelo
const Paciente= require('../models/pacienteModels')
// http request
//getAll
const ObtenerPacientes= async(req,res)=>{
    try {
        const paciente= await Paciente.find({})
        res.status(201).json({msg:'listado de pacientes:', paciente})
    } catch (error) {
        res.status(404).json({msg:'error al obtener pacientes', error})
    }
}
//get One
const obtenerUnPaciente= async(req,res)=>{
    const {id} = req.params
    const getIdPaciente= await Paciente.findById(id)
    if (getIdPaciente !==null) {
        res.status(200).json({msg:'exito en la consulta',getIdPaciente})
    } else {
        res.status(404).json({msg:'Algo salio mal en la consulta'})
    }
}
//post
const CrearPaciente= async(req,res)=>{
    const {nombre,apellido,fecha_nacimiento,dni,sexo,telefono,num_hc}=req.body
    console.log(req.body)
    try {
       const paciente = new Paciente({
        nombre,apellido,fecha_nacimiento,dni,sexo,telefono,num_hc
       }) 
       const newPaciente = await paciente.save()
       res.status(201).json({msg:'nuevo paciente creado con exito',newPaciente})
       console.log(newPaciente)
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarPaciente=async(req,res)=>{
    const {id} = req.params
    const {nombre,apellido,fecha_nacimiento,dni,sexo,telefono,num_hc}=req.body
    const getIdUpdate =await Paciente.findByIdAndUpdate(id,
        {nombre,apellido,fecha_nacimiento,dni,sexo,telefono,num_hc})
    if (getIdUpdate !== null) {
        res.status(201).json({msg:'exito en la modificacion de paciente'})
    } else {
        res.status(404).json({msg:'Error al querer modificar un paciente'})
    }
}
//delete
const borrarPaciente= async(req,res)=>{
    const {id} = req.params
    const getId= await Paciente.findByIdAndDelete(id)
    if (getId!==null) {
        res.status(201).json({msg:'exito al borrar'})        
    } else {
        res.status(404).json({msg:'Error al borrar paciente'})
    }
}

module.exports={ObtenerPacientes,obtenerUnPaciente,CrearPaciente,modificarPaciente,borrarPaciente}