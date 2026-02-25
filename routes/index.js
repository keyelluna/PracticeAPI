const express = require ('express');
router = express.Router();
const userController = require('../controllers/userController');


//route to get all users
router.get('/users', userController.getAllUsers);
//Route to serach ID
router.get('/users/:id', userController.getUserById);
//Route to search gender
router.get('/users/:gender', userController.getUserByGender);


//Route to create new user
router.post('/users', userController.createUser);
router.put('/users', userController.updateUser);

//router delete user

router.delete('/users', userController.deleteUser);
module.exports=router;
