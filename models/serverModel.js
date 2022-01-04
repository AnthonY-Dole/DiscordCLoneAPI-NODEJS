const mongoose = require("mongoose");
  
    const ServerSchema =  new mongoose.Schema({
        name: {
            type:String,
            required:true
        },
        owner: {
            type:String,
            required:true
        },
        
        status:{
            type:Boolean,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        },
        members:{
        type:[String],
        required:false
        }
    });

    const Server = mongoose.model('Server', ServerSchema); 
    module.exports = Server;