import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <Box
        sx={{
          width: "100%",
          py: 2,
          bgcolor: "text.primary",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="h5"
              variant="h5"
              sx={{ color: "white", fontWeight: "bold", mr: 2 }}
            >
              Welcome User!
            </Typography>
            <Avatar
              alt="Travis Howard"
              src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"
            ></Avatar>
          </Box>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "white" : "grey",
              fontWeight: isActive ? "bold" : "normal",
              marginLeft: "50px",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to={"/loan"}
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "white" : "grey",
              marginLeft: "50px",
            })}
          >
            Request for loan
          </NavLink>
        </Box>

        <Button variant="contained" onClick={logout} sx={{ width: 100, mt: 3 }}>
          Log out
        </Button>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
