import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";
import Navigation from "../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { error, user, registerUser, isLoading } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid
            style={{ display: "flex", alignItems: "center" }}
            sx={{ mt: 8 }}
            item
            xs={12}
            md={6}
          >
            <div>
              <Typography variant="h6" gutterBottom>
                Register
              </Typography>
              {!isLoading && (
                <form onSubmit={handleSubmit} action="">
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    type="text"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Confirm Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "75%", m: 1 }}
                  >
                    Register
                  </Button>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button variant="text">
                      Already Registered? Please Login
                    </Button>
                  </NavLink>
                </form>
              )}
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Registered Successfully!</Alert>
              )}
              {error && <Alert severity="error">{error}</Alert>}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
