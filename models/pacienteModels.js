const {Schema,model} = require('mongoose')

const PacienteSchema = new Schema(
    {   
       nombre: {
            type:String,
            required: true},
        apellido: { 
            type : String,
            required: true},
        fecha_nacimiento:{ 
            type : String,
            required: true},
        dni:{ 
            type : Number,
            required: true},
        sexo:{type: String,
        required:true},
        telefono:{
            type:Number
        },
        num_hc:{
            type:String,
            required:true
        }
    }
)
module.exports = model('paciente',PacienteSchema)