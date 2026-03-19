import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  song_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "84%",
    height: "2.2vw",
    boxSizing: "border-box",
    padding: "0 0.8vw",
    borderBottom: "0.05vw solid #5a5a5a",
    color: "white",
    fontSize: "1vw",
    direction:'ltr',
    float:'left'
  },
  playing_song_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "84%",
    height: "2.2vw",
    boxSizing: "border-box",
    padding: "0 0.8vw",
    borderBottom: "0.05vw solid #5a5a5a",
    color: "white",
    fontSize: "1vw",
    direction:'ltr',
    float:'left',
    backgroundColor:"#1D1D1D"
  },
  purple_icon: {
    color: "#9B59B6",
    width: "1.5vw",
    height: "1.5vw",
  },

  icons: {
    width: "1.5vw",
    height: "1.5vw",
    cursor:'pointer'
  },

  inner_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "2.2vw",
    gap: "1vw",
  },
  popOver:{
    backgroundColor:'gray'
  }
}));

export default useStyles;