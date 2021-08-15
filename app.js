require("./app/config/config");
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express();

app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('common'))

const PORT = process.env.PORT || 3000;

/* app.use(function(req,res,next){
    //req.username = req.query.nombre.toUpperCase()
    //console.log("Entró al Middleware" + req.username)
    req.query.nombre = req.query.nombre.toUpperCase()
    req.query.rol = "PUBLIC"
    next()
}) */

app.use(require('./app/routes/routes'));

mongoose.connect(process.env.Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resp => {
    console.log("Conexion realizada correctamente!!");
}).catch(resp => {
    console.log("Error en la conexion!!");
})


app.listen(PORT, () => {
    console.log(`Servidor en ejecucion en el puerto:${PORT}!!!`);
})