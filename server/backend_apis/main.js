const express = require('express'); //import express module

const cors = require("cors") // import cors module
// telling the application that its okay for backend and frontend to run on same server

const backend = require("./backend");

server = express(); // created a server application
server.use(express.json()); // use the JSON parser from express, 
// tells the server that we want to send the info in JSON format
server.use(cors()); // tells server to use cors

server.use(backend.router); // tells the server we want to use the router in account


//creating the mapping table
//router = express.Router(); // created a router object, so that we can write functions for the API

server.use(router); // telling server to use the router table

server.listen(5000, errors => {
    if (errors) {
        console.log("Server couldnt start. Error: ", errors);
    } else {
        console.log("Server started on port 5000");
    }
}) 