import SongsTable from "../songsTable/songsTable";
import type {Song} from "../../assets/types"

interface Props{
    songList: Array<Song>;
}
const AllSongsPage = ({songList}:Props) =>{

    return(
        <>
        {<SongsTable songList = {songList}/>}
        </>
    )
}

export default AllSongsPage