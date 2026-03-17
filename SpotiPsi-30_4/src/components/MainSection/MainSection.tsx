import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";
const MainSection = () =>{
      const { classes } = useStyles();

    return(
        <div className={classes.MainSection}>
        <SideBar/>
        </div>

    )
}

export default MainSection