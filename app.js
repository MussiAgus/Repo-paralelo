const express = require("express");
const { inicializarDB } = require("./config/db_config");
const app= express();
const { UserRoutes } = require("./Routes/index");
const { User } = require("./Models/Usuarios");

app.use("/", UserRoutes);
// Activar el servidor
const port = 8080;

app.listen(port, async () => {
    try {
        await inicializarDB();
        console.log(`Escuchando en el puerto ${port}`);
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
    }
});






// Función asíncrona para inicializar la base de datos y luego iniciar el servidor

 /*   try {
        app.listen(port, async () => {
            await inicializarDB();
            console.log(`Escuchando en el puerto ${port}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
    }
  */  
    
    /*(async () => {
    try {
        await inicializarDB();
        const user = await User.findOne({
            where: {
                id:1 // Criterio de búsqueda (por ejemplo, buscar por ID)
            }
        });

        console.log(user);
    } catch (error) {
        console.error("Error al buscar usuario:", error);
    }
})();
*/
// Función asíncrona para inicializar la base de datos y luego crear un usuario
/*const inicializarYCrearUsuario = async () => {
    try {
        await inicializarDB();

        const nuevoUsuario = await User.create({
            nombre: "John",
            apellido: "Doe",
            edad: 25,
            mail: "john@example.com",
            createdAt: new Date(),
        });

        console.log("Usuario creado:", nuevoUsuario.toJSON());
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
};

// Llama a la función para inicializar y crear el usuario
inicializarYCrearUsuario();*/

