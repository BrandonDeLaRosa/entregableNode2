const db = require('../utils/database');
const { DataTypes } = require ('sequelize');

const Categories = db.define('categories', {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },

},{
    timestamps:false  //<-- Cuando no es necesario o importante Las marcas de tiempo ( created at, etc).
})

module.exports = Categories