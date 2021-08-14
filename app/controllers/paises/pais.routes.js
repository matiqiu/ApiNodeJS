const express = require('express');
const app = express();
const { GetPaises, NewPais, GetPais, UpdatePais, DeletePais } = require('./pais')

async function getPaises(req, res) {
    try {

        let respuesta = await GetPaises();
        res.send(respuesta);

    } catch (e) {
        res.send("Error en la busqueda de paises!!");
    }
}

async function newPais(req, res) {
    try {
        let pais = req.body;
        //console.log(pais);
        let respuesta = await NewPais(pais);
        res.send(respuesta);
    } catch (e) {
        res.send("Error al ingresar Pais!!");
    }
}

async function getPais(req, res) {
    try {
        let id = req.params.id;
        let respuesta = await GetPais(id);
        res.send(respuesta);

    } catch (e) {
        res.send("Error en la busqueda del pais!!");
    }
}

async function updatePais(req, res) {

        let id = req.params.id
        let pais = req.body
        //let pais = existePais(id)
        let respuesta = await UpdatePais(id,pais)
        res.send(respuesta)
}

async function deletePais(req, res) {
    let id = req.params.id
    let pais = req.body
    let respuesta = await DeletePais(id,pais)
    res.send(respuesta)
}

//Get
app.get("/api/paises", getPaises);
app.get("/api/paises/:id", getPais);
//Post
app.post("/api/paises", newPais)
//PUT
app.put("/api/paises/:id", updatePais)
//DEL
app.delete("/api/paises/:id", deletePais)


module.exports = app;