import SongsTable from "../songsTable/songsTable";
import type { Song } from "../../assets/types"
import { useContext } from "react";
import { FavoritesContext } from "../../App";
import useStyles from "./FavoritePageStyle";
interface Props {
    songList: Array<Song>;
}

const FavoritePage = ({ songList }: Props) => {
    const favoritesContext = useContext(FavoritesContext);
    const { classes } = useStyles()

    if (!favoritesContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    };

    const { favoriteSongsList } = favoritesContext;
    let favoriteSongslist1: Array<Song> = [];

    favoriteSongslist1 = songList.filter((item: Object) =>
        favoriteSongsList.includes(item.id))

    return (
        <>
            <h1 className={classes.topOfThePage} >המועדפים שלי</h1>
            {<SongsTable songList={favoriteSongslist1} />}
        </>
    )
}

export default FavoritePage