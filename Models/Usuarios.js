const { DataTypes } = require("sequelize");
const { sequelizeInstance } = require("../config/db_config"); // Asegúrate de que la ruta sea correcta

const User = sequelizeInstance.define("Users", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelizeInstance.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelizeInstance.literal('CURRENT_TIMESTAMP')
    },
});

module.exports ={User};
