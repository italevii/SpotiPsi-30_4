import { ListItem, List } from "@mui/material";
import { useContext } from "react";
import { PlayListsContext } from "../../../App";
import useStyles from "./AddToPlaylistPopOverStyles";
import { UpdatePlaylist } from "../../HelperFunctions/UpdatePlayList";
import { reRenderPlaylistsContext } from "../../../App";
import { isInPlaylist } from "../../HelperFunctions/CheckSongInPlaylist";
interface Props {
    songId: string
}
const AddToPlaylistPopOver = ({ songId }: Props) => {
    const playListsContext = useContext(PlayListsContext);
    const reRenderplaylistContext = useContext(reRenderPlaylistsContext);

    if (!reRenderplaylistContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const {setReRenderPlayList } = reRenderplaylistContext;


    const { classes } = useStyles()
    if (!playListsContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { playLists } = playListsContext;

    const addToPlaylist = (playlistId: string): MouseEventHandler<HTMLLIElement> | undefined => {
        const isAlreadyInplayList = isInPlaylist(playLists, songId,playlistId);
        console.log(isAlreadyInplayList)
        if (!isAlreadyInplayList) {
            UpdatePlaylist(songId, playlistId)
            setReRenderPlayList(prev => !prev)
            alert("added to playlist")
        }
        else {
            alert("song already in playlist")
        }
    }
    return (
        <>
            <List className={classes.list}>
                {playLists.map((playlist) => (
                    <ListItem onClick={() => addToPlaylist(playlist.id) }
                        key={playlist.id}
                        className={classes.playlistItem}  >
                        <p >{playlist.name}  </p>
                    </ListItem>
                ))}
            </List>

        </>
    )
}

export default AddToPlaylistPopOver