const {Sequelize}= require("sequelize");


const sequelizeInstance = new Sequelize("prueba", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

const inicializarDB = async()=>{
    try{
        await sequelizeInstance.authenticate();
        await sequelizeInstance.sync({force: false});
        console.log("Conexion a la base establecida");
    }
    catch(error){
        console.error("No se pudo conectar a la base de datos...tonto");
    }
}


module.exports={sequelizeInstance, inicializarDB}; 