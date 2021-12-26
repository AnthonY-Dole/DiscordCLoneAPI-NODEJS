const Server = require('../models/serverModel');

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

//GET '/servers/:serverID'
const getOneServer = (req, res, next) => {
    let id = req.params.id; //get the server name

    //find the specific server with the id
    Server.findOne({_id:id}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Server doesn't exist."});
    }
    else return res.json(data); 
    });
};

//PUT '/servers/:serverID'
const updateServer = (req, res, next) => {
    res.json({message: "Update 1 server "});
};

//DELETE '/servers/:serverID'
const deleteOneServer = (req, res, next) => {
    res.json({message: "DELETE a server"});
};

//export controller functions
module.exports = {
    getAllServers, 
    newServers,
    getOneServer,
    updateServer,
    deleteOneServer
};