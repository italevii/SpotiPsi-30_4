import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  topOfThePage: {
    color:'white',
    marginRight:'17%',
    fontSize:'200%',
  },
  goBackButton:{
        color:'white',
    marginRight:'10%',
    fontSize:'200%',
    float:'left'
  }

}));

export default useStyles;