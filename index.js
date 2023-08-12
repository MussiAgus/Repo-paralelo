const express = require("express");
const { inicializarDB } = require("./db_config");
const app= express();


//Activar el servidor
port=8000;
async()=>{
    inicializarDB();
    app.listen(port, ()=>{
        console.log("Escuchando en el puerto 8080");
    }) 
}

