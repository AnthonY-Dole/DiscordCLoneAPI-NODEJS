require('dotenv').config();
const express=require('express');
const routesServer = require('./routes/serverRoutes'); 
const routesServerUSer = require('./routes/serverRoutes'); 
const routesUser = require('./routes/userRoutes'); 
const routesAuth = require('./routes/authRoutes'); 
const mongoose = require('mongoose');
const helmet = require('helmet');

const compression = require('compression');
const app = express();
app.use("/public", express.static(process.cwd() + "/public"));
app.use(helmet());
app.use(express.json());
app.use(compression()); //Compress all routes
app.use('/', routesServer); //to use the routes
app.use('/servers/', routesServerUSer); //to use the routes
app.use('/', routesUser); //to use the routes
app.use('/', routesAuth); //to use the routes

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
  });
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})



//establish connection to database
mongoose.connect(
   // 'mongodb+srv://DiscordAdmin:Ynov2021@cluster0.law7m.mongodb.net/discordCloneAPI?retryWrites=true&w=majority',
    process.env.MONGODB_URI,
 
    
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);