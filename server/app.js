//requerimiento de express
const express= require('express')
const app=express()
//requerimiento de cors y morgan
const cors = require('cors')
const morgan = require('morgan')

//rutas
const medicoRuta = require('../routes/medicoRoutes')
const userRuta=require('../routes/userRoutes')
const pacienteRuta= require('../routes/pacienteRoutes')
const ImgRuta = require('../routes/imagenRoutes')
const InfoRuta=require('../routes/InfoRoutes')
const consultaRuta=require('../routes/consultaRoutes')

//configuracion dotenv
require('dotenv/config')

//pedido base de datos
require('../database/dbConnection')
//puerto traido de .env
const port= process.env.PORT || 8080

//puesta en uso de cors morgan y express.json
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//primer get de prueba
app.get('/', (req,res)=>{
    res.json('here we are')
})

app.use('/users',userRuta)
app.use('/medico',medicoRuta)
app.use('/pac',pacienteRuta)
app.use('/consulta',consultaRuta) 

app.use('/imagenes',ImgRuta)
app.use('/info',InfoRuta)
//escucha del puerto 8080

app.listen(port,()=>{
    console.log("ESTAMOS ESCUCHANDO EL PUERTO:",port)
})