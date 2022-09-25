//requerimento de encriptador de contraseña de jwt y del modelo user
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const Users=require('../models/userModels')
//requerimeitno de dotenv configuracion
require('dotenv/config')

//inicio de peticiones http request
//get
const getUsers=async(req,res)=>{
try {
    const users = await Users.find()
    res.status(200).json({msg: 'exito en la consulta',users})
} catch (error) {
    res.status(404).json({msg:'error al querer acceder a la lista de usuarios'})
}
}
//get by id
const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
      if (user) {
        res.json(user)
      }else{
        res.status(404).json({ msg: "Ocurrio un error", error });
      }
    } catch (error) {
      res.status(404).json({ msg: "Ocurrio un error inesperado", error });
    }
  }
//comparativa de usuarios creados
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const SECRET_KEY =  process.env.SECRET_KEY || intentofree
    const userFounded = await Users.findOne({ email })
    if (userFounded) {
      const match = bcrypt.compareSync(password, userFounded.password)
      if (match) {
        const payload = {
          id: userFounded._id,
          email: userFounded.email,
          admin: userFounded.admin
        };
        const token = jwt.sign(payload, SECRET_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({ msg: "exito al loguearse", token, ...payload })
      } else {
        res.status(401).json({ msg: "verifique su token" })
      }
    } else {
      res.status(404).json({ msg: "no hubo coincidencia" });
    }
  }
//post
const createUser = async (req, res) => {
    const SALT_ROUNDS = 10;
    const {  nombreCompleto, email, password, admin } = req.body;
    try {
      let passwordEncrypted = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = new Users({
        nombreCompleto,
        email,
        password: passwordEncrypted,
        admin,
      });
      console.log(passwordEncrypted);
      const userGenerated = await newUser.save();
      res.send({ created: true, ...userGenerated._doc });
    } catch (error) {
      res.send({ msg: "Hubo un error", error });
    }
  }
//put
const modifyUser = async (req, res) => {
    try {
      const { id } = req.params;
      const userFounded = await Users.findByIdAndUpdate(id, {...req.body})
      if(userFounded){
        res
        .json({msg: "usuario modificado con exito", modified: true})
      }else{
        res
        .status(404)
        .json({ msg: "Hubo un error", error })
      }
    } catch (error) {
      res
        .status(404)
        .json({ msg: "Hubo un error", error })
    }
  }
//delete
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const userFounded = await Users.findByIdAndDelete(id)
      if(userFounded){
        res
        .json({msg: "Usuario eliminado con exito", deleted: true})
      }else{
        res
        .status(404)
        .json({ msg: "Hubo un error", error })
      }
      res.send({ msg: "modificacion en usuarios" })
    } catch (error) {
      res
        .status(404)
        .json({ msg: "Hubo un error", error })
    }
  } 
  
//exportacion del modulo
module.exports={getUsers,getUserById,createUser,loginUser,deleteUser,modifyUser}

