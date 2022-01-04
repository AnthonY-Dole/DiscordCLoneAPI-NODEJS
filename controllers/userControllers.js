const User = require('../models/userModel');
const bcrypt = require("bcrypt");

//GET '/users'
const getAllUsers = (req, res, next) => {
    User.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/users'
const newUsers = (req, res) => {
    User.findOne({ pseudo: req.body.pseudo }, async (err, data) => {

        if (!data) {
            const newUsers = new User({
                pseudo:req.body.pseudo,
                isAdmin: req.body.isAdmin,
                password: req.body.password,
                serverList: req.body.serverList,
                online: req.body.online,
            })
            const salt = await bcrypt.genSalt(10);
            // now we set user password to hashed password
            newUsers.password = await bcrypt.hash(newUsers.password, salt);
            // save this object to database
            newUsers.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })        
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    })    
};

//GET '/users/:id'
const getOneUser = (req, res, next) => {
    let id = req.params.id; //get the User id

    //find the specific User with the id
    User.findOne({_id:id}, (err, data) => {
    if(err || !data) {
        return res.json({message: "User doesn't exist."});
    }
    else return res.json(data); 
    });
};

//PATCH '/users/:id'
const updateUser = (req, res, next) => {
    let id = req.params.id; //get the User id
   
    //find the specific User with the id and update data
    User.findOne({_id:id}, req.body, { new:false }, async (err, data) => {
    if(err || !data) {
        return res.json({message: "User doesn't exist."});
    }
    else {
        data.pseudo = req.body.pseudo;
        data.isAdmin = req.body.isAdmin;
        data.password = req.body.password;
        data.serverList = req.body.serverList;
        data.online = req.body.online;


        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        data.password = await bcrypt.hash(data.password, salt);
        
        //save changes to db
        data.save(err => {
            if (err) { 
            return res.json({message: "User failed to update.", error:err});
            }
            return res.json(data);
        })  
    } 
    
    });
};

module.exports = {
    getAllUsers, 
    newUsers,
    getOneUser,
    updateUser,
    
};