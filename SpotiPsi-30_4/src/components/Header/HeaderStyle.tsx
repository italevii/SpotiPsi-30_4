import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({

    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'#313131',
    },
    headerText:{
        float:'right',
        justifyItems:'center',
        justifySelf:'center',
        color:'#9A58B2',
        marginRight:'2vw',
        fontSize:'3vh'
    
    }

}));

export default useStyles;