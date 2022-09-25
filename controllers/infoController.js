//traer el modelo
const Info=require('../models/InfoModels')
//http request
//get
const obtenerInfoes= async (req,res)=>{
    try {
        const Infoes= await Info.find({})
        res.status(201).json({msg:'exito',Infoes})
    } catch (error) {
        res.status(404).json({msg:'Error al acceder a Infoes'})
    }
}
//get one
const ObtenerInfoOne = async(req,res)=>{
    const {id} = req.params  
   const getId = await Info.findById(id)
   if (getId!== null) {
       res.status(200).json({msg:'exito en la consulta',getId})
   } else {
       res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
   } 
}
//post
const crearInfo = async(req,res)=>{
    const {titulo,cuerpo,fav}=req.body
    try {
     const crearInfo= new Info({
    titulo,cuerpo,fav
    })
    const newInfo= await crearInfo.save()
    res.status(201).json(newInfo)
    } catch (error) {
    res.satus(404).json('Error',error)        
    }
   
}
//put
const modificarInfo=async(req,res)=>{
    const {id} = req.params 
    const{titulo,cuerpo,fav}= req.body  
    const getIdUpdate = await Info.findByIdAndUpdate(id,{titulo,cuerpo,fav})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}
//delete
const borrarInfo = async(req,res)=>{
    const {id} = req.params
    const getId= await Info.findByIdAndDelete(id)
    if (getId!==null) {
        res.status(201).json({msg:'exito al borrar'})        
    } else {
        res.status(404).json({msg:'Error al borrar'})
    }
}
module.exports= {obtenerInfoes,crearInfo,borrarInfo,modificarInfo,ObtenerInfoOne}