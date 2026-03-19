import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
topOfThePage:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'7%',
    marginBottom:'1%'
},
  goBackButton:{
    color:'white',
    fontSize:'200%',
    float:'left',
    paddingTop:'1%',
    marginLeft:'1%'
  },
pageHeader:{
    color:'white',
    marginRight:'17%',
    fontSize:'200%',

}

}));

export default useStyles;