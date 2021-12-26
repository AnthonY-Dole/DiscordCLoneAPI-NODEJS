const express = require('express'); //import express
const multer = require('multer');
const upload = multer();

const router  = express.Router(); 

const serverController = require('../controllers/serverControllers'); 

router.get('/servers', serverController.getAllServers);
router.post('/servers', upload.none(), serverController.newServers);

router.get('/servers/:id', serverController.getOneServer);
router.put('/servers/:id', serverController.updateServer);
router.delete('/servers/:id', serverController.deleteOneServer);

module.exports = router; // export to use in server.js