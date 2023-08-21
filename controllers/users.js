const { inicializarDB } = require("../config/db_config");
const { User } = require("../Models/Usuarios");

const mensajeUser=(req,res)=>{
    return res.send("Hola! Esta es la seccion de busqueda.");
}


async function busquedaUser(req,res,next){
    try{
        await inicializarDB();
        const user= await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.send(user);
    }catch(error){
        console.error("Error en la busqueda de usuario", error);
    }
}

module.export={mensajeUser, busquedaUser};