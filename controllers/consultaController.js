//traer modelo
const Consulta = require('../models/consultaModels')
//peticiones http request
//get all
const ObtenerConsultas= async(req,res)=>{
    try{
        await Consulta.find()
        .populate({path:'paciente',model:'paciente'})
        .populate({path:'medico',model:'Medico'})
        .exec((err,Consulta)=>{
             if(err){
             console.log(err);
             process.exit(-1);
             }
             res.status(201).json(Consulta)
         }  
         )
     }catch(error){
         res.status(404).json(error)
     }
}
//get one
const ObtenerUnConsulta = async(req,res)=>{
    const {id} = req.params  
   const getIdConsulta = await Consulta.findById(id)
   if (getIdConsulta !== null) {
       res.status(200).json({msg:'exito en la consulta',getIdConsulta})
   } else {
       res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
   } 
}
//post
const CrearConsulta =async(req,res)=>{
    const {paciente,fecha_consulta,sintomas,diagnostico,tratamiento,estudios,resultadoEst,medico}=req.body
    try {
     const consulta = new Consulta({
        paciente,fecha_consulta,sintomas,diagnostico,tratamiento,estudios,resultadoEst,medico
     })   
     const newConsulta = await consulta.save()
     res.status(201).json({msg:'nuevo Consulta creado',newConsulta})
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarConsulta=async(req,res)=>{
    const {id} = req.params 
    const{ paciente,fecha_consulta,sintomas,diagnostico,tratamiento,estudios,resultadoEst,medico}= req.body  
    const getIdUpdate = await Consulta.findByIdAndUpdate(id,{ paciente,fecha_consulta,sintomas,diagnostico,tratamiento,estudios,resultadoEst,medico})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}

//delete
const borrarConsulta=async(req,res)=>{
    const {id } = req.params
    const getById = await Consulta.findByIdAndDelete(id)
    if(getById !== null){
        res.status(200).json("Se elimino ")
    }else{
        res.status(404).json("Algo salio mal y no se pudo eliminar ")
    }
}
module.exports ={ ObtenerConsultas,ObtenerUnConsulta,CrearConsulta,modificarConsulta,borrarConsulta}