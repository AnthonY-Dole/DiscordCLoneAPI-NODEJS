const Channel = require('../models/channelModel');
const Server = require('../models/serverModel');
const User = require('../models/userModel');

//GET '/servers'
const getAllServers = (req, res, next) => {
    Server.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/servers'
const newServers = (req, res) => {
    Server.findOne({ name: req.body.name }, (err, data) => {

        if (!data) {
            const newServers = new Server({
                name:req.body.name,
                owner: req.body.owner,
                channelID: req.body.channelID,
                status: req.body.status,
                createdOn: req.body.createdOn,
            })

            // save this object to database
            newServers.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })        
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Server already exists"});
        }
    })    
};

//GET '/servers/:id'
const getOneServer = (req, res, next) => {
    let id = req.params.id; //get the server id

    //find the specific server with the id
    Server.findOne({_id:id}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Server doesn't exist."});
    }
    else return res.json(data); 
    });
};

//PUT '/servers/:id'
const updateServer = (req, res, next) => {
    let id = req.params.id; //get the server id
   
    //find the specific server with the id and update data
    Server.findOne({_id:id}, req.body, { new:false }, (err, data) => {
    if(err || !data) {
        return res.json({message: "Server doesn't exist."});
    }
    else {
       data.name = req.body.name;
       data.owner = req.body.owner;
       data.channelID = req.body.channelID;
       data.status = req.body.status;
       
        //save changes to db
        data.save(err => {
            if (err) { 
            return res.json({message: "Comment failed to add.", error:err});
            }
            return res.json(data);
        })  
    } 
    
    });
};

//DELETE '/servers/:id'
const deleteOneServer = (req, res, next) => {
    let id = req.params.id; // get the name of tea to delete

    Server.deleteOne({_id:id}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "Server doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "Server deleted."});
    });
};
//USER----------------
const getOneServerAndAllUser = (req, res, next) => {
    let id = req.params.id; //get the server id

    //find the specific server with the id
    Server.findOne({_id:id}, (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        else{
            User.find({}, (err, data)=>{
                if (err){
                    return res.json({Error: err});
                }
                else{

                    return res.json(data);
                }
                
            })
        }
        ;
    })
};
//CHANNEL----------------------
//GET '/servers/:id/channels'
const getAllChannels = (req, res, next) => {
    let id = req.params.id; //get the server id

    //find the specific server with the id
    Server.findOne({_id:id}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Server doesn't exist."});
    }
    else 
    {
        Channel.find({}, (err, data)=>{
            if (err){
                return res.json({Error: err});
            }
            return res.json(data);
        })

    }
   
    });
};
//POST '/servers/:id/channels'
const newChannel = (req, res) => {
    let id = req.params.id;

    Server.findOne({_id:id}, (err, data) => {
        if(err || !data) {
            return res.json({message: "Server doesn't exist."});
        }
        else 
        {
            Channel.findOne({ name: req.body.name }, (err, data) => {

                if (!data) {
                    const newChannel = new Channel({
                        name:req.body.name,
                        serverID: id,
                       
                    })
        
                    // save this object to database
                    newChannel.save((err, data)=>{
                        if(err) return res.json({Error: err});
                        return res.json(data);
                    })        
                }else{
                    if(err) return res.json(`Something went wrong, please try again. ${err}`);
                    return res.json({message:"Channel already exists"});
                }
            })    
    
        }
       
        });
};
//GET '/servers/:id/channels/:id'
const getOneChannel = (req, res, next) => {
    let id = req.params.id; //get the server id

    //find the specific server with the id
    Channel.findOne({_id:id}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Channel doesn't exist."});
    }
    else return res.json(data); 
    });
};

//DELETE '/servers/:id/channels/:id'
const deleteOneChannel = (req, res, next) => {
    let id = req.params.id; // get the name of tea to delete

    Channel.deleteOne({_id:id}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "CHannel doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "Channel deleted."});
    });
};

//export controller functions
module.exports = {
    getAllServers, 
    newServers,
    getOneServer,
    updateServer,
    deleteOneServer,
    getOneServerAndAllUser,
    getAllChannels,
    newChannel,
    getOneChannel,
    deleteOneChannel
};