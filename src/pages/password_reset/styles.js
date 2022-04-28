import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  /*password: {
    width: "80%",
    marginTop: "2%",
    marginLeft: "10%",
    margintRight: "10%",
  },*/
  /*redefinir: {
    color: "grey",
    fontSize: "24px",
    marginLeft: "30%",
  },*/
  saudacoes: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  buttonSig: {
    borderRadius: "30px 30px 30px 30px",
    backgroundColor: "#e60023",
    color: "white",
    "&:hover": {
      backgroundColor: "#D50622",
    },
    marginTop: "5%",
    marginBottom: "5%",
  },
  link: {
    cursor: "pointer",
    color: "black",
  },
}));
