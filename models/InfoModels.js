const {Schema, model} = require('mongoose')
const InfoSchema= new Schema(
    {
       titulo: {
            type: String,
            required: true,
          },  
        cuerpo:{
            type:String,
            required:true
        },
        fav: {
            type: Boolean,
            required: false,
          },   
    }
)
module.exports= model ('Info',InfoSchema)