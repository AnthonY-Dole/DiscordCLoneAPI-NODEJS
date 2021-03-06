# Welcome on DiscordCLoneAPI-NODEJS 😁

## Table of contents 👀
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)


### General info
Discord Clone API is a backend app imitate  the famous Discord app

#### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /servers      | GET                  | Displays all servers
| /servers      | POST               | Creates a new servers
|/servers/:id   | GET     | Displays a specific server, by id
|/servers/:id   | PUT  | Update  server, by id
|/servers/:id   | DELETE | Deletes a specific server, by ID
| /users      | GET                  | Displays all users
| /users      | POST               | Creates a new user
|/users/:id   | GET     | Displays a specific user, by id
|/users/:id   | PATCH  | Update  user, by id
|/servers/:id/channels   | GET  | Display channel in a server by ID
|/servers/:id/channels/:id  | POST  | POST channel by server ID
|/servers/:id/channels/:id  | DELETE  | Delete server by ID


![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

[You can find Postman request here ](../master/public/DiscordCLone.postman_collection.json)





### Technologies
Project is created with:
<p>
<img src="https://img.shields.io/badge/-MongoDB%20-1AA121?style=for-the-badge&logo=mongodb&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express">  
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
</p>

* Node version: 16.13.1
* MongoDB Atlas

#### 👉🌍 Deployed at: https://discord-clone-api-tp.herokuapp.com/


### Setup
To run this project locally, clone repo and then execute in command prompt:
```
$ npm install
$ npm start or nodemoon server.js 
spoil nodemoon server.js is better for you 😉
```

### Next Steps
-Make a better security  🙄
	
