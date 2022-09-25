//traer el modelo
const Imagen=require('../models/imagenesModels')
//http request
//get
const obtenerImagenes= async (req,res)=>{
    try {
        const imagenes= await Imagen.find({})
        res.status(201).json({msg:'exito',imagenes})
    } catch (error) {
        res.status(404).json({msg:'Error al acceder a imagenes'})
    }
}
//post
const crearImagen = async(req,res)=>{
    const {img,nombre,fav}=req.body
    try {
     const crearImg= new Imagen({
    img,nombre,fav
    })
    const newImg= await crearImg.save()
    res.status(201).json(newImg)
    } catch (error) {
    res.satus(404).json('Error',error)        
    }
   
}
//put
const modificarImg=async(req,res)=>{
    const {id} = req.params 
    const{img ,nombre,fav }= req.body  
    const getIdUpdate = await Imagen.findByIdAndUpdate(id,{img ,nombre,fav})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}
//delete
const borrarImg = async(req,res)=>{
    const {id} = req.params
    const getId= await Imagen.findByIdAndDelete(id)
    if (getId!==null) {
        res.status(201).json({msg:'exito al borrar'})        
    } else {
        res.status(404).json({msg:'Error al borrar'})
    }
}
module.exports= {obtenerImagenes,crearImagen,borrarImg,modificarImg}