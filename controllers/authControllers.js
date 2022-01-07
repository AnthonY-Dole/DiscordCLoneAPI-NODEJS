const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();




const signin = (req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user =  User.findOne({ id: req.body.id });
        if (!user) return res.status(400).send("Invalid email or password");

        const validPassword =  bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(400).send("Invalid email or password");

        const token = user.generateAuthToken();
        res.send(token);
    } catch (error) {
        console.log(error);
        res.send("Something went wrong, please try again");
    }
};


module.exports = {
    signin,
    
};