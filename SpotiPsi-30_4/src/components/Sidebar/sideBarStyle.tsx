import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebar:{
        position: 'fixed',
        right:'0',
        width:'15%',
        height:'100%',
        backgroundColor:'#121212',
        color:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'right'
}

}));

export default useStyles;