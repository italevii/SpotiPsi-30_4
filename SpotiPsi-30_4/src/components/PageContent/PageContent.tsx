import AllSongsPage from "../AllSongsPage/AllSongsPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";
import type {Playlist, Song} from "../../assets/types"
import useStyles from "./PageContentStyle";
interface Props{
    pageType:string;
    songList:Array<Song>;
<<<<<<< HEAD
}
const PageContent = ({pageType,songList}:Props) =>{
=======
    favoriteSongs:Array<string>;
    playLists:Array<Playlist>
}
const PageContent = ({pageType,songList,favoriteSongs,playLists}:Props) =>{
        const { classes } = useStyles();

>>>>>>> be5d196 (30/added playlists)
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