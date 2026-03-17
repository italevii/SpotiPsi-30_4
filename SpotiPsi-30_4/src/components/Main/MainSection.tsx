import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";


interface Props{
    changePage:(pageType:string) => MouseEventHandler<HTMLLIElement>
}
const MainSection = ({changePage}:Props) =>{
      const { classes } = useStyles();

    return(
        <div className={classes.MainSection}>
        <SideBar changePage = {changePage}/>
        </div>

    )
}

export default MainSection