import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sidebar: {
    position: 'fixed',
    right: 0,
    width: '15%',
    height: '100vh',
    backgroundColor: '#121212',
    color: 'white',
    borderLeft: '0.5px solid #2A2A2A',
  },

  listStyle: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    height: '20%',
    width: '100%',  
    margin: 0,       
    padding: 0,      
    alignItems: 'center',
    direction: 'rtl'
  },

  listItem: {
    "&:hover": {
      backgroundColor: '#2D2032',
    },
    width: '100%',
    display: 'flex',
    height: '60px',   
    justifyContent: 'flex-start',
    cursor: 'pointer',
    alignItems: 'center',
    gap: '13%',
    paddingRight: '1%' 
  }
}));

export default useStyles;