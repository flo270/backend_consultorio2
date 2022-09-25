//traer modelo
const Medico= require('../models/medicoModels')
//peticiones http request
//get all
const ObtenerMedicos= async(req,res)=>{
    try{
       const medico= await Medico.find()
        /* .populate({path:'horario',model:'horario'}).exec((err,medico)=>{
             if(err){
             console.log(err);
             process.exit(-1);
             } */
             res.status(201).json(medico)
        /*  }  
         ) */
     }catch(error){
         res.status(404).json(error)
     }
}
//get one
const ObtenerUnMedico = async(req,res)=>{
    const {id} = req.params  
   const getIdMedico = await Medico.findById(id)
   if (getIdMedico !== null) {
       res.status(200).json({msg:'exito en la consulta',getIdMedico})
   } else {
       res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
   } 
}
//post
const CrearMedico =async(req,res)=>{
    const {nombreCompleto,especialidad,horario,fav}=req.body
    try {
     const medico = new Medico({
        nombreCompleto,especialidad,horario,fav
     })   
     const newMedico = await medico.save()
     res.status(201).json({msg:'nuevo medico creado',newMedico})
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarMedico=async(req,res)=>{
    const {id} = req.params 
    const{  nombreCompleto,especialidad,horario,fav}= req.body  
    const getIdUpdate = await Medico.findByIdAndUpdate(id,{  nombreCompleto,especialidad,horario,fav})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}

//delete
const borrarMed= async(req,res)=>{
    const {id} = req.params 
    console.log(id)
    const getIdMedico= await Medico.findByIdAndDelete(id)
    if (getIdMedico!==null) {
        res.status(201).json({msg:'exito al borrar'})        
    } else {
        res.status(404).json({msg:'Error al borrar medico'})
    }
}
module.exports={ObtenerMedicos,ObtenerUnMedico,CrearMedico,modificarMedico,borrarMed}