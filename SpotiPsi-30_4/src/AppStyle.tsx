import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    body:{
        width:'100wh',
        backgroundColor:'#121212',
        height:'100vh',
        margin:'0',
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow:'hidden'
    }

}));

export default useStyles;