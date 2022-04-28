import React from "react";
import {
  Box,
  Button,
  Card,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useStyles } from "./styles";
import history from "../../services/history";
import { useTheme } from "../../hooks/theme";

function password_reset() {
  const classes = useStyles();
  /*const [foco, setFoco] = React.useState({
    showFoco: true,
  })*/
  const { darkMode, updateMode } = useTheme();
  console.log({ darkMode });

  const handleClickLogin = () => {
    history.push("/");
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
      <Button type="submit" onClick={updateMode}>
        <Brightness4Icon variant="contained" color="primary" />
      </Button>
      <Typography
        className={classes.saudacoes}
        xs={12}
        component="h1"
        variant="h5"
      >
        Reset password
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
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
        <Button
          className={classes.buttonSig}
          variant="contained"
          type="submit"
          fullWidth
        >
          Confirm
        </Button>
        <br />
        <Link href="#" vriant="body2" onClick={handleClickLogin}>
          Sign in
        </Link>
      </Box>
    </Card>
  );
}
export default password_reset;
