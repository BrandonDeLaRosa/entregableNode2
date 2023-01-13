const  { Router } = require('express');   // Similar al router de react
const { getAllUsers, getUsersById, updateUser, deleteUser, createUser } = require('../controllers/users.controller')

const router = Router();

// router.get('/users', (req, res) => {
	// res.json({message:'Obteniendo todos los usuarios'})     
// })


router.get('/users', getAllUsers);
router.get('/users/:id', getUsersById);
router.put('/users', updateUser);
router.delete('/users', deleteUser);
router.post('/users', createUser);

module.exports = router;
