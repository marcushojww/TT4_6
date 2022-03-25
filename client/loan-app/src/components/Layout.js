import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <Box
        sx={{
          width: "100%",
          p: 4,
          bgcolor: "text.primary",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "white" : "",
          })}
        >
          Home
        </NavLink>

        <NavLink to={"/requestLoan"}>Request for loan</NavLink>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
