import React from "react";

function Loan() {
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

      <Typography component="h5" variant="h5">
        {accLoans}
      </Typography>
    </Box>
  );
}

export default Loan;
