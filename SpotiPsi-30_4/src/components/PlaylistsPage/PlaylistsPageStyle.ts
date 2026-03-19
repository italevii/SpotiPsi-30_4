import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    Playlists:{
        direction:'ltr',
        width:'85%',
        float:'left',

},
pageHeader:{
    color:'white',
    marginRight:'17%',
    fontSize:'200%',

},
addPlayListButton:{
    float:'left',
    marginLeft:'3%',
    backgroundColor:'transparent',
    color:'#9A58B2',
    borderColor:"#9A58B2",
    borderRadius:'20px',
    height:'4vh',
    marginTop:'0.9%',
    fontSize:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},
topOfThePage:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'7%'
}

}));

export default useStyles;