import SongsTable from "../songsTable/songsTable";
import type {Song} from "../../assets/types"

interface Props{
    songList: Array<Song>;
    favoriteSongsList: Array<string>
}
const AllSongsPage = ({songList, favoriteSongsList}:Props) =>{

    return(
        <>
        {<SongsTable songList = {songList}  favoriteSongList={favoriteSongsList}/>}
        </>
    )
}

export default AllSongsPage