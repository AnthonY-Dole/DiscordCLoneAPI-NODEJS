require('dotenv').config();
const express=require('express');
const routes = require('./routes/serverRoutes'); 
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})



//establish connection to database
mongoose.connect(
   // process.env.MONGODB_URI,
    'mongodb+srv://DiscordAdmin:Ynov2021@cluster0.law7m.mongodb.net/discordCloneAPI?retryWrites=true&w=majority',
    
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);