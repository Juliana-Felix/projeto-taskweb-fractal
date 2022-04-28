import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styles";
import history from "../../services/history";
import { api } from "../../services/api";

//import { Redirect } from "react-router-dom";

// import { Container } from './styles';
import { useTheme } from "../../hooks/theme";
import { AccountBox } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function signin() {
  const { darkMode, updateMode } = useTheme();
  console.log({ darkMode });
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    api.get("/logins").then((response) => console.log(response.data));
  }, []);

  const handleClickLogin = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });*/
    const data = {
      email,
      senha,
      firstName,
      lastName,
    };

    api.post("/logins", data);
  };

  return (
    <Card className={classes.card}>
      <Button onClick={updateMode}>
        <Brightness4Icon variant="contained" type="submit" color="primary" />
      </Button>
      <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Grid
            container
            justifyContent="space-between"
            spacing={2}
            alignItems="center"
          >
            <Grid item xs={12}>
              <Grid item xs={12} className={classes.logo}>
                <AccountBox color="primary" fontSize="large" />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.title}
                >
                  Sign Up
                </Typography>
              </Grid>
              <Typography
                component="p"
                variant="body2"
                className={classes.subtitle}
              >
                Register to access the platform
              </Typography>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={classes.buttonSig}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={handleClickLogin}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Card>
  );
}

export default signin;
