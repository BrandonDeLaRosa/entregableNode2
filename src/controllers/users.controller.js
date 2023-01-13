const UserServices = require ('../services/user.service'); //  Import de services.

/*
Funcionamiento del controlador 
En la ruta se ejecuta getAllUsers ---> Cuando el cliente hace una peticion de tipo get a localhost:8100/api/v1/users.
GetAllUsers es el controlador que va a los servicios y ejecuta la funcion/metodo getAll, 
el metodo va con el modelo,Obtiene el resultado y lo devuelve al controlador, el controlador,
lo toma y lo manda al cliente.
Ruta: Peticion --> getAllUsers.controller --> users.service --> modelo -->controlador --> users.routes -->
*/

const getAllUsers = async (req,res) =>{
    try{
        const result = await UserServices.getAll();  // <-- Si todo bien, el controlador responde con la informacion
        res.status(200).json(result);
    }catch(error) {
        res.status(400).json(error.message) //<--- Si hay error, manda mensaje de error.
    }
}

const getUsersById = async (req,res) => {
    
    try{
        const {id} =req.params; // <-- Llamamos al id a partir de request, ya que la ruta pide el parametro
        const result = await UserServices.getById(id)   //  <-- se usa el metodo getById y se le pasa el id que se recopila arriba.
        res.status(200).json(result)        
    }catch(error) {
        res.status(400).json(error.message) //<--- Si hay error, manda mensaje de error.
    }
}


const createUser = async (req,res) => {
    try{
        const newUser = req.body;
        const result = await UserServices.create(newUser)
        res.status(201).json(result)
    }catch (error) {
        res.status(400).json(error.message)
    }
}

// const getAllUsers = (req,res) => {
//     res.json({message: 'Hiciste get'})
// }
// const getUsersById = (req,res) => {
//     res.json({message: 'Hiciste get by Id'})
// }
// const createUser = (req,res) => {
//     res.json({message: 'Hiciste post'})
// }
const updateUser = (req,res) => {
    res.json({message: 'Hiciste put'})
}
const deleteUser = (req,res) => { 
    res.json({message: 'Hiciste delete'})
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}
