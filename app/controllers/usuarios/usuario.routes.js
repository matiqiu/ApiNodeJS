const express = require('express')
const app = express()
const { GetUsuario, GetUsuarios } = require('./usuario')

async function getUsuarios(req, res) {
    try {
        //console.log("Request desde router :" + req.username)
        //console.log("cambio del query : " + req.query.nombre)
        console.log(req.query)
        let data = await GetUsuarios()
        return res.send(data)
    } catch (error) {
        res.status(500).send("Error al buscar usuarios")
    }
}

const getUsuario = async (req, res) => {
    try {
        let usuario = req.params.usuario
        let data = await GetUsuario(usuario)
        return res.send(data)
    } catch (error) {
        res.status(500).send("Error al buscar usuario")
    }
}

app.post('/api/login/', LoginUsuario)
app.get("/api/usuarios", getUsuarios)
app.get("/api/usuarios/:usuario", getUsuario)

module.exports = app