const Paises = require('../models/paises')

const existeNombrePais = async (nombre) => {
    let pais = await Paises.findOne({ nombre })

    if (pais) {
        throw new Error('El nombre ' + nombre + ' ya esta ingresado')
    }
}

module.exports = {existeNombrePais}