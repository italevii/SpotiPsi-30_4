import SongsTable from "../songsTable/songsTable";
import type {Song} from "../../assets/types"
import useStyles from "./FavoritePageStyle";
interface Props {
    songList:Array<Song>
    favoriteSongs: Array<string>;
}
const FavoritePage = ({ songList, favoriteSongs }: Props) => {
    const { classes } = useStyles();
    let favoriteSongslist:Array<Song> =[]
    favoriteSongslist = songList.filter((item:Object) => 
        favoriteSongs.includes(item.id))

    return (
        <>
        <h1 className={classes.topOfThePage} >המועדפים שלי</h1>
        {<SongsTable songList={favoriteSongslist} />}
        </>
    )
}

export default FavoritePage