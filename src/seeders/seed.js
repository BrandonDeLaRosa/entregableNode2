// Aqui se siembra la informacion, por el momento vamos a usar datos de prueba.

const db = require('../utils/database');
const Users = require ('../models/users.model');
const ToDos = require('../models/toDos.model');
// const ToDos = require ('../models/toDos.model')

const users = [
    // {username: "Brandon" , email: "brandon@correo.com",  password: "1234"}, //id: 1
    // {username: "Jhorman" , email: "jhorman@correo.com",  password: "1234"}, //id: 2
    // {username: "Lucero" , email: "lucero@correo.com",  password: "1234"}, //id: 3
    {username: "rafael" , email: "rafael@correo.com",  password: "1234"}, //id: 1
    {username: "Pedro" , email: "Pedro@correo.com",  password: "1234"}, //id: 2
    {username: "Vero" , email: "Vero@correo.com",  password: "1234"}, //id: 3
];

// Para recorrer el arreglo de toDos, primero se corrobora que el usuario exista (debido a la llave foranea).
// Se corre con un setTimeOut Para que primero se ejecute users y posteriormente toDos.

const toDos = [
    {title: "Tarea 1", description: "Descripcion para 1", userId: 1},
    // {title: "Tarea 2", description: "Descripcion para 2", userId: 1},
    {title: "Tarea imposible", userId: 2},
    {title: "Dormir",descripcion: "porque node no me deja", userId: 3}
];

const categories = [];

const toDosCategories = []; 


// db.sync({force: false}) Si es false no se reescribe la estructua, si es true, borra todo.
db.sync({force: false})  // Sincronizamos la base de datos con lo que hay en el semillero.
 .then(() => {
    console.log("iniciando con el sembradio malicioso");
// Vamos a recorrer el arreglo users y por cada elemento se va crear un usuario en el model Users 
     users.forEach((user) => Users.create(user)); 

     setTimeout(() => {
        toDos.forEach(todo => ToDos.create(todo))
     }, 100);
 })