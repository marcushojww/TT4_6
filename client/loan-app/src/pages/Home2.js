import React, { useEffect, useState } from "react";
import * as api from "../api/index";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home2() {
  const [accBalance, setAccBalance] = useState();
  const [accLoans, setAccLoans] = useState();

  useEffect(() => {
    async function getAccountBalance() {
      try {
        const accountData = await api.getCustomerBalance(8);
        const customerLoansData = await api.getCustomerLoans(8);
        // const loanData = await api.getLoanAmount(1);
        setAccBalance(accountData.data[0]?.balance);
        setAccLoans(customerLoansData.data);
        // setAccLoans(customerLoansData.data[0]?.loan_amount);

        console.log(customerLoansData);
      } catch (err) {
        console.log(err);
      }
    }
    getAccountBalance();
  }, []);
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography component="h3" variant="h3" sx={{ my: 4 }}>
          Your Account
        </Typography>
        <Box
          sx={{
            width: 3 / 6,
            borderRadius: "0.25rem",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 4,
            p: 4,
          }}
        >
          <Typography component="h5" variant="h5">
            Your Account Balance:
          </Typography>
          {accBalance && (
            <Typography component="h5" variant="h5">
              ${accBalance}
            </Typography>
          )}
        </Box>
        <Typography component="h3" variant="h3" sx={{ my: 4 }}>
          Loan History
        </Typography>
        {accLoans &&
          accLoans.map((loan) => {
            const { LoanId, loan_amount } = loan;
            return (
              <Box
                key={LoanId}
                sx={{
                  width: 3 / 6,
                  borderRadius: "0.25rem",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  mt: 4,
                  p: 4,
                }}
              >
                <Typography component="h5" variant="h5">
                  Loan {LoanId}
                </Typography>

                <Typography component="h5" variant="h5">
                  {loan_amount}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Layout>
  );
}

export default Home2;
