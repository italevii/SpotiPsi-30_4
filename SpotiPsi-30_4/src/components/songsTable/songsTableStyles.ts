import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  songs_table: {
    overflowY: "scroll",
    marginTop: "5%",
    width: "100%",
    alignSelf: "self-end",
    height: "80vh",
    direction: "rtl", 

    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#C89FE6",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "white",
      border: "3px solid white",
      borderRadius: "40px",
    },
  },

}));

export default useStyles;