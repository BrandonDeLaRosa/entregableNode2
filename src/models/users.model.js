  const db = require ('../utils/database'); // <-- Conexion con la base de datos.

  const { DataTypes } = require('sequelize');     // <-- Conversion de tipos de datos. de postgres a sequelize

  //definor el modelo de usuarios.
//    los modelos se definen con una mayuscula.
// Al crear el modelo se pueden definir dos parametros: 
//    - el primero " nombre", el segundo un objeto con los atributos.
 


//nombre del modelo  ||   nombre de la tabla(tal cual se definio en dbdiagram.io).
  const Users = db.define("users", {   // <-- Dentro del objeto se coloca lo definido en dbdiagram.io
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    }
  })

  module.exports = Users;