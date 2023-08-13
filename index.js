const express = require("express");
const { inicializarDB } = require("./Config/db_config");
const app= express();


// Activar el servidor
const port = 8000;

// Función asíncrona para inicializar la base de datos y luego iniciar el servidor
const iniciarServidor = async () => {
    try {
        await inicializarDB();
        app.listen(port, () => {
            console.log(`Escuchando en el puerto ${port}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
    }
};

iniciarServidor(); // Llama a la función para activar el servidor