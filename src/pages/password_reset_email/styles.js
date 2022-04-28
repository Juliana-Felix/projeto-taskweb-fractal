import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  saudacoes: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  /*root: {
    width: "80%",
    marginTop: "5%",
    marginLeft: "10%",
    margintRight: "10%",
    marginBottom: "2%",
    display: "flex",
    justifyContent: "space-around",
  },*/
  about: {
    width: "75%",
    //textAlign: "center",
    marginLeft: "32%",
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
