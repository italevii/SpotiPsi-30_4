import AllSongsPage from "../AllSongsPage/AllSongsPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";
import type {Playlist, Song} from "../../assets/types"
import useStyles from "./PageContentStyle";
interface Props{
    pageType:string;
    songList:Array<Song>;
    playLists:Array<Playlist>

}

const PageContent = ({pageType,songList,playLists}:Props) =>{
        const { classes } = useStyles();

    const getPage = (pageType:string) =>{
        if(pageType === "songs"){
            return <AllSongsPage songList={songList} />
        }
        if(pageType === "favorites"){
            return <FavoritePage songList={songList} />
        }
        if(pageType === "playlist"){
            return <PlaylistsPage playLists = {playLists}/>
        }
    }

    const Page = getPage(pageType)
    return(
        <div className={classes.MainSection}>
           {Page}
        </div>

    )
}

export default PageContent