import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),

    //marginTop: 105,
    //backgroundColor: "blue",
  },

  logo: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "none",
  },

  title: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },

  subtitle: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "12px",
  },

  saudacoes: {
    color: "grey",
    textAlign: "center",
    marginBottom: "2%",
    fontSize: "25px",
  },
  small: {
    width: "80%",
    marginLeft: "22%",
  },

  root: {
    width: "80%",
    marginTop: "2%",
    marginLeft: "10%",
    margintRight: "10%",
  },

  password: {
    width: "80%",
    marginTop: "2%",
    marginLeft: "10%",
    margintRight: "10%",
  },

  acesso: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  login: {
    "&:hover": {
      color: "red",
    },
    marginTop: "5%",
  },
  buttonSig: {
    borderRadius: "30px 30px 30px 30px",
    backgroundColor: "#e60023",
    color: "white",
    "&:hover": {
      backgroundColor: "#D50622",
    },
    marginBottom: "5%",
    marginTop: "5%",
  },
}));
