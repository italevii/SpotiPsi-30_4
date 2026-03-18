import PageContent from "../PageContent/PageContent";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";
import type { Song } from "../../assets/types";
interface Props{
    changePage:(pageType:string) => MouseEventHandler<HTMLLIElement>
    pageType:string;
    songList:Array<Song>;
}
const MainSection = ({changePage,pageType,songList}:Props) =>{
      const { classes } = useStyles();

    return (
        <div className={classes.MainSection}>
        <SideBar changePage = {changePage}/>
        <PageContent pageType = {pageType} songList={songList} />
        </div>

    )
}

export default MainSection