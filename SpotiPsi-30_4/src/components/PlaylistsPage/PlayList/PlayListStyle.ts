import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  playListDiv: {
    display:'flex',
    width: "100%",
    borderBottom: "0.05vw solid #5a5a5a",
    color: "white",
    fontSize: "100%",
  },
  songsCount:{
    fontSize:'70%',
    color:'lightgrey',
    direction:'rtl'
  }
}));

export default useStyles;