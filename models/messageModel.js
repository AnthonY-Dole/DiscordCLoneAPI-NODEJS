const mongoose = require("mongoose");
const User = require("./userModel");


    
    const MessageSchema =  new mongoose.Schema({
        message: {
            type:String,
            required:true
        },
        channelID: {
            type:Number,
            required:true
        },
        user: {
            type:String,
            required:true
           // default://User.pseudo
        },
        dateMessage: {
            type:Date,
            default:Date.now
        }

    });

    const  Message = mongoose.model(' Message', MessageSchema); 
    module.exports =  Message;

