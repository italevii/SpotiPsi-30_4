import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({

    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'#313131',
        position:'fixed',
        top:'0'
        
    },
    headerText:{
        float:'right',
        justifyItems:'center',
        justifySelf:'right',
        color:'#9A58B2',
        marginRight:'2vw',
        fontSize:'3vh'
    
    }

}));

export default useStyles;