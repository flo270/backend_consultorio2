const {Schema,model} = require('mongoose')

const ConsultaSchema = new Schema(
    {  
        paciente:{
            type:Schema.ObjectId,
            ref: 'paciente'
        }, 
      fecha_consulta: {
            type:String,
            required: true},
        sintomas: { 
            type : String,
            required: true},
        diagnostico:{ 
            type : String,
            required: true},
       tratamiento:{ 
            type :String,
            required: true},
        estudios:{
            type:String,
            required: true
        }, 
        resultadoEst:{
            type:String
        },
        medico:{
            type:Schema.ObjectId,
            ref: 'Medico'
        }
       
    }
)
module.exports = model('consulta',ConsultaSchema)