import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";

function Login() {
  let navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const switchForm = () => {
    setIsSignUp((prev) => {
      return !prev;
    });
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7yNjkjkKGr8/v1/-1x-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to your DBS App
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              mt: 3,
            }}
          >
            {isSignUp && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="first-name"
                  label="First name"
                  name="firstName"
                  autoComplete="first-name"
                  autoFocus
                  sx={{ mr: 2 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="last-name"
                  label="Last name"
                  name="lastName"
                  autoComplete="last-name"
                  sx={{ ml: 2 }}
                />
              </Box>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                id="confirm-password"
                autoComplete="confirm-password"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </Button>

            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={switchForm}
              sx={{ alignSelf: "flex-end" }}
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
