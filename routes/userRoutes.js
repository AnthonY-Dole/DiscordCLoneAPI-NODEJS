const express = require('express'); //import express
const multer = require('multer');
const auth = require("../middleware/auth");
const upload = multer();

const router  = express.Router(); 

const userController = require('../controllers/userControllers'); 
//---SERVER----
router.get('/users', userController.getAllUsers);
router.post('/users', upload.none(), userController.newUsers);

router.get('/users/:id', userController.getOneUser);
router.patch('/users/:id',upload.none(), userController.updateUser);


module.exports = router; // export to use in server.js