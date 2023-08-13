const {Sequelize}= require("sequelize");

const sequelizeInstance= new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
}); 

const inicializarDB = async()=>{
    try{
        await sequelizeInstance.authenticate();
        console.log("Conexion a la base de datos establecida");
    }
    catch(error){
        console.error("No se pudo conectar a la base de datos...tonto");
    }
}


module.exports={sequelizeInstance, inicializarDB}; 