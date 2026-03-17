import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    footer:{
        position: 'fixed',
        left:'0',
        bottom:'0',
        width:'100%',
        height:'10%',
        backgroundColor:'#1D1D1D',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2.3vh'
}

}));

export default useStyles;