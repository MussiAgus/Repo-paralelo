const express = require("express");
const {mensajeUser, busquedaUser}=require("../controllers/users")

const UserRoutes=express.Router();

UserRoutes.get("/",mensajeUser);
UserRoutes.get("/:id",busquedaUser);


module.export=UserRoutes;
