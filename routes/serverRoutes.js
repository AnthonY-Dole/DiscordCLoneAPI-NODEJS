const express = require('express'); //import express
const multer = require('multer');
const upload = multer();

const router  = express.Router(); 

const serverController = require('../controllers/serverControllers'); 
//---SERVER----
router.get('/servers', serverController.getAllServers);
router.post('/servers', upload.none(), serverController.newServers);

router.get('/servers/:id', serverController.getOneServer);
router.put('/servers/:id', upload.none(), serverController.updateServer);
router.delete('/servers/:id', serverController.deleteOneServer);
//USER
router.get('/servers/:id/users', serverController.getOneServerAndAllUser);
//CHANNEL
router.get('/servers/:id/channels', serverController.getAllChannels);
router.post('/servers/:id/channels', upload.none(), serverController.newChannel);
router.get('/servers/:id/channels/:id', serverController.getOneChannel);
router.delete('/servers/:id/channels/:id', serverController.deleteOneChannel);
//Message
router.get('/servers/:id/channels/:id/messages', serverController.getAllMessage);
router.post('/servers/:id/channels/:id/messages', upload.none(), serverController.newMessage);
module.exports = router; // export to use in server.js