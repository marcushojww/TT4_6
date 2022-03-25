import React from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Layout() {
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
          to={"/home"}
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
          })}
        >
          <Typography>Home</Typography>
        </NavLink>
        <NavLink to={"/requestLoan"}>Request for loan</NavLink>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
