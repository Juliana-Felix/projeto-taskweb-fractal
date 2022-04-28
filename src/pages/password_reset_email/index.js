import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

import { useTheme } from "../../hooks/theme";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function password_reset_email() {
  const classes = useStyles();
  const { darkMode, updateMode } = useTheme();
  console.log({ darkMode });

  console.log("kspokaposkopaks");

  return (
    <Card className={classes.card}>
      <Button onClick={updateMode}>
        <Brightness4Icon variant="contained" type="submit" color="primary" />
      </Button>
      <Grid xs={12}>
        <Typography
          xs={12}
          className={classes.saudacoes}
          component="h1"
          variant="h5"
        >
          Forgot your password?
        </Typography>
        <Typography
          xs={12}
          className={classes.saudacoes}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          We will send you instructions to reset your password
        </Typography>
      </Grid>
      <div className={classes.root}>
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className={classes.buttonSig}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default password_reset_email;
