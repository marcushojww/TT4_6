const express = require("express"); //importing express framework

const database = require("./database");

router = express.Router();
// created a router object, so that we can write functions for the API

// testing if apis work, calling all customer table details

//authentication
router.post("/addUser", (request,response) => {
  // live database data
  let user = request.body;
  const hash = crypto.createHash('sha256').update(user.password).digest('hex');
  database.connection.query(
      `CREATE TABLE if not exists
      Users (Username VARCHAR(50), Password VARCHAR(68))`, // the SQL query
      (errors,records) => {
          if (errors) {
              console.log(errors);
              response.status(500).send("Some error occured at the backend");
          } else {
              response.status(200).send("Created new account!");
          }
      }
  )
  database.connection.query(
      `INSERT INTO  
      Users (Username, Password)
      values (${user.username}, ${hash}')`, // the SQL query
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

router.post("/authenticateUser", (request,response) => {
  // live database data
  let user = request.body;
  const hash = crypto.createHash('sha256').update(user.password).digest('hex');
  database.connection.query(
      `SELECT EXISTS (
          SELECT *
          FROM Users
          WHERE username = '${user.username}' AND password = '${hash}''
      )`, // the SQL query
      (errors,records) => {
          if (errors) {
              console.log(errors);
              response.status(500).send("Some error occured at the backend");
          } else if (sql) {
              response.status(200).send(records); // if 0, disallow. If 1, allow.
          }
      }
  )
})

router.get("/customer/all", (request, response) => {
  database.connection.query(
    `select * from customer`, // the SQL query
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occured in the backend");
      } else {
        response.status(200).send(records);
      }
    }
  );
});

// get customerbalance by customer id
router.get("/customerbalance/by-cid", (request, response) => {
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
    }
  );
});

// get all loans with loan amounts of 1 customer by customer id
router.get("/customerloans/by-cid", (request, response) => {
  //live database data
  database.connection.query(
    `select l.LoanId, l.loan_amount
        from customerloan as c, loan as l
        where CustomerId = '${request.query.customerId}' and 
        c.LoanId = l.LoanId`, // the SQL query
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occured in the backend");
      } else {
        response.status(200).send(records);
      }
    }
  );
});

// getting loan_amount by loan id
router.get("/loan_amount/by-lid", (request, response) => {
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
    }
  );
});

// adding new loan into customerloan table and loan table(not yet done)
router.post("/customerloan/add", (request, response) => {
  // live database data
  let customerloan = request.body;
  console.log(response.body)
  database.connection.query(
    `Insert into 
        customerloan (CustomerLoanId, CustomerId, LoanId)
        values ('${customerloan.customerloanid}','${customerloan.customerid}','${customerloan.loanid}')`, //the SQL query
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occured at the backend");
      } else {
        response.status(200).send("Created new customer loan!");
      }
    }
  );
});

// updating payment(not done yet) and loan table with amount paid (not working yet)
router.patch("/loan/update", (request, response) => {
    const { loanId } = request.params;
    const { loanPaid } = request.body;
  
    const singleLoanData = loan.find((loanData) => LoanId === loanId); // returns the first element that is true

    database.connection.query(
      `Update loan
      Set loan_amount = ${singleLoanData.loan_amount += loanPaid}
      where LoanId = ${loanId}`,
      (errors, records) => {
        if (errors) {
          console.log(errors);
          response.status(500).send("Some error occured at the backend");
        } else {
          response.status(200).send(`Updated loan with LoanId = ${loanId}!`);
        }
      }
    );
  });

module.exports = { router }; // to allow the whole module to be exported to another file
