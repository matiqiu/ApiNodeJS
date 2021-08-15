const jwt = require('jsonwebtoken')

const generarJWT = (usuario) => {
    return new Promise((resolve, project) => {
        const payload = usuario
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '2h',
        }), (err, toke) => {


        }
    })
}