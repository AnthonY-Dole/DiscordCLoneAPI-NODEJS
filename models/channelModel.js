const mongoose = require("mongoose");


    
    const ChannelSchema =  new mongoose.Schema({
        name: {
            type:String,
            required:true
        },
        serverID: {
            type:Object,
            required:true
        }
    });

    const Channel = mongoose.model('Channel', ChannelSchema); 
    module.exports = Channel;

