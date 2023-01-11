const { Sequelize } = require("sequelize");

//Crear una instancia con parametros de configuracion de nuestra base de datos.
//un objeto de configuracion --> credenciales de mi base de datos.

const db = new Sequelize ({
    database: "todoapp1",   //< --- Tanto en psql como en vsCode debe ir en minusculas el nombre. 
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "ruth",
    dialect: "postgres", // la base de datos que estamos usando.
})

module.exports = db;   // <-- De esta forma se podra importar en otros files.