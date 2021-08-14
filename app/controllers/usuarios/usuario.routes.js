const express = require('express')
const app = express()

app.get("/api/usuarios", getUsuarios)
app.get("/api/usuarios/:usuario", getUsuario)