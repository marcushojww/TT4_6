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
  });
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          alignItems: "center",
        }}
      >
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
              {accBalance}
            </Typography>
          )}
        </Box>
        {/* {accLoans &&
          accLoans.map( (loan) => {
            return (
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
                  Your Loan Amount:
                </Typography>
                {accLoans && (
                  <Typography component="h5" variant="h5">
                    {accLoans}
                  </Typography>
                )}
              </Box>
            );
          })} */}
      </Box>
    </Layout>
  );
}

export default Home2;
