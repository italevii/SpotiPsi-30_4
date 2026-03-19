import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import useStyles from "./AddPlaylistDialogStyle";
import { useState,useContext } from "react";
import { Button } from "@mui/material";
import { postPlaylist } from "../../HelperFunctions/PostPlaylist";
import { reRenderPlaylistsContext } from "../../../App";
interface Props {
    open: boolean;
    handleClose: () => void;
}

const AddPlaylistDialog = ({ open, handleClose }: Props) => {
    const { classes } = useStyles();
    const [newPlaylistName, setNewPlaylistName] = useState("");
    const favoritesContext = useContext(reRenderPlaylistsContext);
    
        if (!favoritesContext) {
            throw new Error("FavoritesContext must be used inside FavoritesProvider");
        }
        const { reRenderPlayList, setReRenderPlayList } = favoritesContext;

    const sendPlaylist = () => {
        if (newPlaylistName.trim() != "") {
            postPlaylist(newPlaylistName)
            alert(`playlist ${newPlaylistName} added`)
            setNewPlaylistName("")
            handleClose()
            setReRenderPlayList(prev => !prev)
            console.log(reRenderPlayList)
            
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
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle className={classes.Dialog}>
                    <Typography>יצירת פלייליסט חדש</Typography>
                </DialogTitle>
                <DialogContent className={classes.Dialog} dividers>
                    <Typography gutterBottom>
                        <input value={newPlaylistName} onChange={handleChange} id="playlistName" placeholder="שם הפלייליסט"></input>
                    </Typography>
                </DialogContent>
                <DialogContent>
                    <Button onClick={closeDialog}>ביטול</Button>
                    <Button onClick={sendPlaylist}>צור</Button>
                </DialogContent>

            </Dialog>


        </>
    )
}

export default AddPlaylistDialog