const Usuario = require('../../models/usuarios')


const GetUsuarios = async () => {

    const data = await Usuario.find({})
    return data
}

const GetUsuario = async (usuario) => {

    const data = await Usuario.findOne({ usuario })
    return data
}

const LoginUsuario = async (req, res) => {
    const {usuario, clave} = req.body
    const user = await Usuario.findOne({usuario,clave})
    if(!user){
        return res.status(400).json({
            mensaje:"Login Incorrecto"
        })
    }
    //const token  await
}

module.exports = {
    GetUsuarios,
    GetUsuario
}