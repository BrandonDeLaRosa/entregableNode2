const Users = require('../models/users.model');

class UserServices {
    static async getAll() {   //<-- Metodo estatico, no se tiene que inicializar y desde aqui se ejecuta. Una clase define, el metodo getAll(()) trae a todo los usuarios.
         try{
            const result = await Users.findAll(); //<--  Find all trae todas las entradas de la base de datos.
            return result;
         } catch (error) {
            throw error  // si hay error lanza el error.
  
         }
    }

    static async getById(id) {
        try {
            const result = Users.findByPk(id); 
            return result
        }catch(error) {
            throw error
        }
    }

    static async create(user){ //el nombre del parametro cambia, al que viene de controller. 
        try{
            const result = Users.create(user)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;