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

router.get("/loan_amount/by-lid", (request,response) => {

    //live database data
    database.connection.query(
        `select loan_amount 
        from loan
        where LoanId = '${request.query.loanId}'`, // the SQL query
    (errors, records) => { 
        if (errors) {
            console.log(errors);
            response.status(500).send("An error occured in the backend");
        } else {
            response.status(200).send(records);
        }
    })
})

router.post("/customerloan/add", (request,response) => {

    // live database data
    let customerLoan = request.body;
    database.connection.query(
        `Insert into 
        customerloan (CustomerLoanId, CustomerId, LoanId)
        values (${customerloan.customerloanid},${customerloan.customerid},'${customerloan.loanid}')`, //the SQL query
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