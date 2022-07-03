//Inicio del servedor
const express = require ('express');
const app = express();

//importar CORS para respuestas API
const cors = require('cors')


//Pasar objetos json
app.use(express.json())

//Iniciación CORS
app.use(cors());


//llamada a Base de datos
const conDB = require('./models')


//Enrutadores/Rutas
const eventoRouter = require("./routes/Evento");
app.use('/enDais/eventos',eventoRouter)

//Llamada al servidor en el puerto 3001
conDB.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Corriendo")
    })
}) 