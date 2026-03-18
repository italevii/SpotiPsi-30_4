import PageContent from "../PageContent/PageContent";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";
import type { Song,Playlist } from "../../assets/types";
interface Props{
    changePage:(pageType:string) => MouseEventHandler<HTMLLIElement>
    pageType:string;
    songList:Array<Song>;
    playLists:Array<Playlist>
}
const MainSection = ({changePage,pageType,songList,playLists}:Props) =>{
      const { classes } = useStyles();

    return (
        <div className={classes.MainSection}>
        <SideBar changePage = {changePage}/>
        <PageContent pageType = {pageType} songList={songList}  playLists = {playLists}/>
        </div>

    )
}

export default MainSection