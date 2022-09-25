const {Schema, model} = require('mongoose')
const userSchema= new Schema(
    {
        nombreCompleto: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          password: {
            type: String,
            required: true,
          },
          
          admin: {
            type: Boolean,
            required: true,
          } ,
          banned: {
            type: Boolean
          }
    }
)
module.exports= model ('Users',userSchema)