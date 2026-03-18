import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import useStyles from "./AddPlaylistDialogStyle";
import { useState, } from "react";
import { Button } from "@mui/material";
import { postPlaylist } from "../../HelperFunctions/PostPlaylist";
interface Props {
    open: boolean;
    handleClose: () => void;
}

const AddPlaylistDialog = ({ open, handleClose }: Props) => {
    const { classes } = useStyles();
    const [newPlaylistName, setNewPlaylistName] = useState("");


    const sendPlaylist = () => {
        if (newPlaylistName.trim() != "") {
            postPlaylist(newPlaylistName)
            alert(`playlist ${newPlaylistName} added`)
            setNewPlaylistName("")
            handleClose()
            reRender()
            
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
            <Dialog open={open} onClose={handleClose}>
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