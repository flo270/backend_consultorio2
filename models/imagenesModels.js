const {Schema, model} = require('mongoose')
const ImagenSchema= new Schema(
    {
       img: {
            type: String,
            required: true,
          },  
        nombre:{
            type:String,
            required:true
        }  ,
         fav: {
            type: Boolean,
            required: false,
          },   
    }
)
module.exports= model ('Imagenes',ImagenSchema)