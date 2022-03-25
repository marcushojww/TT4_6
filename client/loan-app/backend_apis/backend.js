const express = require("express"); //importing express framework

const database = require('./database');

const router = express.Router();

// created a router object, so that we can write functions for the API

// creating the API functions, ie the URI mapping
// tells express.js what to do if the URL/URI is called
router.get("/account/all", (request, response) => {

    // static data
    // // 1. get all the accounts
    // let accounts = data.get_all_accounts();

    // // 2. return the accoutns as response
    // response.send(accounts);

    //live database data
    database.connection.query(`select * from account`, // the SQL query
    (errors, records) => { 
        if (errors) {
            console.log(errors);
            response.status(500).send("An error occured in the backend");
        } else {
            response.status(200).send(records);
        }
    })

})

router.get("/account/by-aid", (request,response) => {

    // static data
    // // 1. Extract the account_id from the request
    // let account_id = request.query.account_id; // getting the input account_id

    // // 2. Get account information from the data
    // let account = data.get_account_by_account_id(account_id); // getting account based on account_id in the request

    // // 3. Return the account information
    // response.send(account);

    //live database data
    database.connection.query(
        `select * 
        from account 
        where account_id = '${request.query.account_id}'`, // the SQL query
    (errors, records) => { 
        if (errors) {
            console.log(errors);
            response.status(500).send("An error occured in the backend");
        } else {
            response.status(200).send(records);
        }
    })
})

router.post("/account/add", (request,response) => {

    // static data
    // // 1. need to get the user object from request
    // let account = request.body; // the whole body is the user object

    // // 2. call the function to add user object in data
    // data.add_account(account);

    // // 3. return the success response
    // response.send("Added successfully!");

    // live database data
    let user = request.body;
    database.connection.query(
        `Insert into 
        account (user_id, account_id, account_name, account_type, balance, credit_limit)
        values (${account.user_id},${account.account_id},'${account.account_name}','${account.account_type}', ${account.balance}, ${account.credit_limit})`, //the SQL query
        (errors,records) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Some error occured at the backend");
            } else {
                response.status(200).send("Created new account!");
            }
        }
    )
})

module.exports = {router};  // to allow the whole module to be exported to another file