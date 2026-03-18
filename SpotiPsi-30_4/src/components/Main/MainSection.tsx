import PageContent from "../PageContent/PageContent";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";
import type { Song,Playlist } from "../../assets/types";
interface Props{
    changePage:(pageType:string) => MouseEventHandler<HTMLLIElement>
    pageType:string;
    songList:Array<Song>;
<<<<<<< HEAD
}
const MainSection = ({changePage,pageType,songList}:Props) =>{
=======
    favoriteSongs:Array<string>;
    playLists:Array<Playlist>
}
const MainSection = ({changePage,pageType,songList,favoriteSongs,playLists}:Props) =>{
>>>>>>> be5d196 (30/added playlists)
      const { classes } = useStyles();

    return (
        <div className={classes.MainSection}>
        <SideBar changePage = {changePage}/>
<<<<<<< HEAD
        <PageContent pageType = {pageType} songList={songList} />
=======
        <PageContent pageType = {pageType} songList={songList} favoriteSongs = {favoriteSongs} playLists = {playLists}/>
>>>>>>> be5d196 (30/added playlists)
        </div>

    )
}

export default MainSection