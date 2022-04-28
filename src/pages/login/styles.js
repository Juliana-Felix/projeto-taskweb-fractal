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
  },
  title: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  saudacoes: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  /*saudacoes: {
    marginLeft: "45%",
  },*/

  root: {
    width: "80%",
    marginTop: "5%",
    marginLeft: "10%",
  },

  password: {
    width: "80%",
    marginTop: "2%",
    marginLeft: "10%",
    marginBottom: "2%",
  },

  acesso: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonSig: {
    borderRadius: "30px 30px 30px 30px",
    backgroundColor: "#e60023",
    color: "white",
    "&:hover": {
      backgroundColor: "#D50622",
    },
    //width: "80%",
    //marginLeft: "10%",
    //padding: "5px",
    //height: "20%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  link: {
    cursor: "pointer",
    color: "black",
  },
}));
