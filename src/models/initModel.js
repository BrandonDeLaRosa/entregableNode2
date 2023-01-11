// Importacion de modelos creados
const Users = require('./users.model')  //<-- Importacion de modelo users
const ToDos = require ('./toDos.model');
const Categories = require('./categories.models');
const ToDosCatogries = require('./toDosCateroties.model');


const initModels = () => {  //<-- En esta funcion se almacenan los modeos y se  relaizan las relaciones entre las mismas.
    Users;
    ToDos;
    Categories;
    ToDosCatogries;
    // Como crear las relaciones:
    ToDos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'}); // as: Indica, user es como autor y foreign key: Indica solo la llave, que relaciona.
    Users.hasMany(ToDos, {as: "task", foreignKey: 'user_id' });
    // Tabla pivote.
    ToDos.belongsTo(ToDos, {as: 'task', foreignKey: 'todo_id'});
    ToDos.hasMany(ToDosCatogries, {as: 'category', foreignKey: "todo_id"});

    ToDosCatogries.belongsTo(Categories, {as: 'category', key:'category_id'});
    Categories.hasMany(ToDosCatogries)
};

module.exports = initModels;