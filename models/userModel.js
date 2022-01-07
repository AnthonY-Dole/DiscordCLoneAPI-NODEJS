const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

    
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
        online :{
            type:Boolean,
            required:false
        },
        serverList: {
            type: [String],
            required:false
        }
    });
    
    UserSchema.methods.generateAuthToken = function () {
        const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
        return token;
    };
    const User = mongoose.model('User', UserSchema); 
    module.exports = User;