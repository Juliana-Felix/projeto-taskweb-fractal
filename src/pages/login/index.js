import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import history from "../../services/history";
import { useTheme } from "../../hooks/theme";
import { Lock } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function login() {
  const { darkMode, updateMode } = useTheme();
  console.log({ darkMode });
  const classes = useStyles();

  const handleClickPasswordReset = () => {
    history.push("/password/reset-email");
  };

  const handleClickSignUp = () => {
    history.push("/signin");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Card className={classes.card}>
      <Button onClick={updateMode}>
        <Brightness4Icon variant="contained" type="submit" color="primary" />
      </Button>
      <Grid
        container
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid item xs={12} className={classes.logo}>
            <Lock color="primary" fontSize="large" />
          </Grid>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign in
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className={classes.buttonSig}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={handleClickPasswordReset}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={handleClickSignUp}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default login;
