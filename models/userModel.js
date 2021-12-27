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
        serverList:[{ name: String}]
    });

    const User = mongoose.model('User', UserSchema); 
    module.exports = User;