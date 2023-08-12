const express = require("express");
const { inicializarDB } = require("./db_config");

const app= express();


port=8080;
//Activar el servidor
async()=>{
    inicializarDB();
    app.listen(port, ()=>{
        console.log("Escuchando en el puerto 8080");
    }) 
}

