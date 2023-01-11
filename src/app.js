const express = require('express');
const db = require('./utils/database')
const initModels = require('./models/initModel');
const Users = require('./models/users.model');
const ToDos = require('./models/toDos.model');

const app = express();
app.use(express.json())

app.get('/' , (req,res) => {
    res.status(200).json({message: 'bienvenido al servidor'})  // <-- Siemore que se haga una peticion a la ruta raiz (localhost:8000/), se va responder con el .json ...
                                                                // Se pone 200 en este tipo de status, pero varia el numero dependiendo el caso.
})

// Probando la conexion de la base de datos.

db.authenticate()
 .then(() => console.log('Autenticacion exitosa'))
 .catch((error) => console.log(error));

initModels();
// Metodo sync de nuestra db
db.sync({alter: false})   //<-- Este codigo modifica el contenido de las tablas.
 .then(() => console.log('Base de datos sincronizada'))
 .catch((error) => console.log(error));



// =========================================================================== PETICIONES ==========================================================================================

                                                                        // USERS
app.get('/users', async (req,res) => {
    try{
        const result = await Users.findAll();   // <--- EL RESULTADO DE CONSULTAR A TODOS LOS USUARIOS DE LA BASE DE DATOS.
        res.status(200).json(result);  
    } catch (error) {
        console.log(error);
    }
});

// Crear usuario
app.post('/users', async (req, res) => {
    try{
        const user = req.body;
        const result = await Users.create(user)
        res.status(201).json(result)
    }catch (error) {
        console.log(error);
    }
});


// Actualizar un usuario, solo podemos cambiar password

app.put('/users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const field = req.body;
        const result = Users.update(field, {where: {id}
        });
        res.status(200).json(result)
    }catch (error) {
        res.status(400).json(error.message)
    }
});

// Eliminar un usuario ...


app.delete('/users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        // const field = req.body;
        const result = await Users.destroy({where: {id}
        });
        res.status(200).json(result)
    }catch (error) {
        res.status(400).json(error.message)
    }
});

                                                                                        // ToDos

app.get('/todos', async (req,res) => {
    try{
        const toDosResult = await ToDos.findAll();  
        res.status(200).json(toDosResult);  
    } catch (error) {
        console.log(error);
    }
});

// Crear Todo
app.post('/todos', async (req, res) => {
    try{
        const todo = req.body;
        const toDosResult = await ToDos.create(todo)
        res.status(201).json(toDosResult)
    }catch (error) {
        console.log(error);
    }
});

// Actualizar una tarea, solo podemos cambiar isComplete
app.put('/todos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const field = req.body;
        const toDosresult = ToDos.update(field, {where: {id}
        });
        res.status(200).json(toDosresult)
    }catch (error) {
        res.status(400).json(error.message)
    }
});

// Eliminar todo

app.delete('/todos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        // const field = req.body;
        const toDosresult = await ToDos.destroy({where: {id}
        });
        res.status(200).json(toDosresult)
    }catch (error) {
        res.status(400).json(error.message)
    }
});

const PORT = 8100;

app.listen(PORT, () => {
    console.log('Servidor Corriendo');
})