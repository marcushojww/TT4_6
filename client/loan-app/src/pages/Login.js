import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../api/index";
import validator from "validator";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../style.css";

function Login() {
  let navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [state, setstate] = useState(false);
  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  const switchForm = () => {
    setIsSignUp((prev) => {
      return !prev;
    });
    // Delete error message
    setErrorMsg(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const form = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    // IF USER IS SIGNING UP
    if (isSignUp) {
      /*
        VALIDATION
      */
      // Check that all fields are filled
      if (
        !data.get("firstName") ||
        !data.get("lastName") ||
        !data.get("email") ||
        !data.get("password")
      ) {
        setErrorMsg("Please fill up all the fields.");
        return;
      }
      // Check validity of email
      if (!validator.isEmail(data.get("email"))) {
        setErrorMsg("Invalid email.");
        return;
      }
      // Confirm password mismatch with password
      if (data.get("password") !== data.get("confirmPassword")) {
        setErrorMsg("Passwords do not match.");
        return;
      }
      /*
        SIGN UP API CALL
      */
      const response = await signUp(form);
      // Successful sign up
      if (response.status === 200) {
        localStorage.setItem("profile", JSON.stringify(response.data));
        // Delete error message
        setErrorMsg(null);
        // Navigate to Home page
        navigate("/");
      } else {
        setErrorMsg("User email already in use.");
      }
    }
    // IF USER IS SIGNING IN
    else {
      /*
        VALIDATION
      */
      // Check validity of email
      if (!validator.isEmail(data.get("email"))) {
        setErrorMsg("Invalid email.");
        return;
      }
      /*
        SIGN IN API CALL
      */
      const response = await signIn(form);
      // Successful sign in
      if (response.status === 200) {
        localStorage.setItem("profile", JSON.stringify(response.data));
        // Delete error message
        setErrorMsg(null);
        // Navigate to Home page
        navigate("/");
      } else {
        setErrorMsg("Invalid user credentials.");
      }
    }
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
      ></Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            mt: 32,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to DBS Loan Management
          </Typography>
          {errorMsg && (
            <Alert severity="error" sx={{ mt: 3, alignSelf: "flex-start" }}>
              {errorMsg}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
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
            <button className="btn" onClick={toggleBtn}>
              {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>

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
