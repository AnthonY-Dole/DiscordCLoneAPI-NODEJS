const mongoose = require("mongoose");


    
    const UserSchema =  new mongoose.Schema({
        pseudo: {
            type:String,
            required:true
        },
        isAdmin: {
            type:Boolean,
            required:true
        },
        password: {
            type:String,
            required:true
        },
        serverList:{
            type:Array,
            required:true
        }
    });

    const User = mongoose.model('User', UserSchema); 
    module.exports = User;