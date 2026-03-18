import SongsTable from "../songsTable/songsTable";
import type {Song} from "../../assets/types"

interface Props {
    songList:Array<Song>
    favoriteSongs: Array<string>;
}
const FavoritePage = ({ songList, favoriteSongs }: Props) => {
    let favoriteSongslist:Array<Song> =[]
    favoriteSongslist = songList.filter((item:Object) => 
        favoriteSongs.includes(item.id))
    console.log(favoriteSongslist)
    return (
        <>
        {<SongsTable songList={favoriteSongslist} />}
        </>
    )
}

export default FavoritePage