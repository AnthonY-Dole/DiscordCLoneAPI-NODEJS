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

//export controller functions
module.exports = {
    getAllServers, 
    newServers,
    getOneServer,
    updateServer,
    deleteOneServer
};