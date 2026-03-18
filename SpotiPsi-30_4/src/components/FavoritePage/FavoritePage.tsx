import SongsTable from "../songsTable/songsTable";
import type {Song} from "../../assets/types"
import { useContext } from "react";
import { FavoritesContext } from "../../App";
interface Props {
    songList:Array<Song>
}
const FavoritePage = ({ songList }: Props) => {
    const favoritesContext = useContext(FavoritesContext);

    if (!favoritesContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { favoriteSongsList, setFavoriteSongsList } = favoritesContext;

    let favoriteSongslist1:Array<Song> =[]
    favoriteSongslist1 = songList.filter((item:Object) => 
        favoriteSongsList.includes(item.id))
    console.log(favoriteSongslist1)
    return (
        <>
        {<SongsTable songList={favoriteSongslist1}/>}
        </>
    )
}

export default FavoritePage