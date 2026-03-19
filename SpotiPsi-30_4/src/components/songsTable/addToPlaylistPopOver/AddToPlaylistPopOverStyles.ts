import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  playlistItem: {
    cursor:'pointer',
      "&:hover": {
      backgroundColor: '#484848',
    },
  },
  list:{
    width:'15vh',
    backgroundColor:'#383838',
    color:'white',
    direction:'rtl'
  }

}));

export default useStyles;