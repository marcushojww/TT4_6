const express = require("express"); //importing express framework

const database = require('./database');

router = express.Router();
// created a router object, so that we can write functions for the API


// get customerbalance by customer id
router.get("/customerbalance/by-cid", (request,response) => {

    //live database data
    database.connection.query(
        `select balance 
        from customer 
        where CustomerId = '${request.query.customerId}'`, // the SQL query
    (errors, records) => { 
        if (errors) {
            console.log(errors);
            response.status(500).send("An error occured in the backend");
        } else {
            response.status(200).send(records);
        }
    })
})