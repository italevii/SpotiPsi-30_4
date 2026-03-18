import AllSongsPage from "../AllSongsPage/AllSongsPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import type {Song} from "../../assets/types"

interface Props{
    pageType:string;
    songList:Array<Song>;
    favoriteSongs:Array<string>;
}
const PageContent = ({pageType,songList,favoriteSongs}:Props) =>{
    const getPage = (pageType:string) =>{
        if(pageType === "songs"){
            return <AllSongsPage songList={songList}/>
        }
        if(pageType === "favorites"){
            return <FavoritePage songList={songList} favoriteSongs={favoriteSongs}/>
        }
    }

    const Page = getPage(pageType)
    return(
        <div>
           {Page}
        </div>

    )
}

export default PageContent