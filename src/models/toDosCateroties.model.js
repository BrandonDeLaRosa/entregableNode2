const  db = require ('../utils/database');
const { DataTypes } = require ('sequelize');
const Categories = require('./categories.models');
const ToDos = require('./toDos.model');


// el nombre se agrega con sneak_case
const ToDosCatogries = db.define("todos_categories", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",    // Llave Foranea.
        references:{
            model: Categories,
            key: "id"
        }
    },
    todoId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "todo_id",
        references: {
            model: ToDos,
            key:"id"
        }
    }
},{
    timestamps:false
})

module.exports=ToDosCatogries;