import { Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import useStyles from "./AddPlaylistDialogStyle";
import { useState,useContext } from "react";
import { Button } from "@mui/material";
import { postPlaylist } from "../../HelperFunctions/PostPlaylist";
import { reRenderPlaylistsContext } from "../../../App";
import { checkIfPlaylistExists } from "../../HelperFunctions/CheckifPlaylistExists";
import { PlayListsContext } from "../../../App";
interface Props {
    open: boolean;
    handleClose: () => void;
}

const AddPlaylistDialog = ({ open, handleClose }: Props) => {
   const {classes} = useStyles()
    const [newPlaylistName, setNewPlaylistName] = useState("");
    const reRenderplaylistContext = useContext(reRenderPlaylistsContext);
        const playListsContext = useContext(PlayListsContext);
    
        if (!reRenderplaylistContext) {
            throw new Error("FavoritesContext must be used inside FavoritesProvider");
        }
        const {setReRenderPlayList } = reRenderplaylistContext;

    if (!playListsContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { playLists } = playListsContext;
    const sendPlaylist = () => {
        if (newPlaylistName.trim() != "" ) {
            if(! checkIfPlaylistExists(playLists,newPlaylistName)){
            postPlaylist(newPlaylistName)
            setNewPlaylistName("")
            handleClose()
            setReRenderPlayList(prev => !prev)
            }
            else{
                alert(`playlist ${newPlaylistName} already exists`)
            }

            
        }

    }
    const handleChange = (e) => {
        setNewPlaylistName(e.target.value);
    }
    const closeDialog = () => {
        handleClose()
    }
    return (
        <>
            <Dialog  open={open} onClose={handleClose} classes={{ paper: classes.Dialog }} >
                <DialogTitle className={classes.title}>
                    יצירת פלייליסט חדש
                </DialogTitle>
                <DialogContent className={classes.content}>
                        <input value={newPlaylistName} onChange={handleChange} id="playlistName" placeholder="שם הפלייליסט" className={classes.input}></input>
                </DialogContent>
                <DialogActions className={classes.buttons}>
                    <Button onClick={closeDialog} className={classes.cancelButton}>ביטול</Button>
                    <Button onClick={sendPlaylist} className={classes.createButton}>צור</Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default AddPlaylistDialog