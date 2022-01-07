const express = require('express'); //import express
const multer = require('multer');
const upload = multer();

const router  = express.Router(); 

const authControllers = require('../controllers/authControllers'); 

router.post('/signin',upload.none(), authControllers.signin);
module.exports = router; // export to use in server.js