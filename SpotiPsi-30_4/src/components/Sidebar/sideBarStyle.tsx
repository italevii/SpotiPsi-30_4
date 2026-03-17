import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebar:{
        position: 'fixed',
        right:'0',
        width:'15%',
        height:'100%',
        backgroundColor:'#121212',
        color:'white',
        borderLeft:'0.5px solid white',

},
    listStyle:{
        listStyleType:'none',
        display:'flex',
        flexDirection:'column',
        height:'20%',
        width:'100%',
        marginTop:'0',
        alignItems:'center',        
    },
    listItem: {
        "&:hover":{
        backgroundColor:'#2D2032',
        
        },
        width:'100%',
        display:'flex',
        height:'100%',
        justifyContent:'center',
        cursor:'pointer',
        alignItems:'center'

    }

}));

export default useStyles;