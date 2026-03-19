import useStyles from './PlaylistsPageStyle';
import { List } from '@mui/material';
import type { Playlist } from "../../assets/types";
import PlayList from './PlayList/PlayList';
import AddIcon from '@mui/icons-material/Add';
import AddPlaylistDialog from './AddPlaylistDialog/AddPlaylistDialog';
import { useState } from 'react';

interface Props {
  playLists: Array<Playlist>
}

const PlaylistsPage = ({ playLists }: Props) => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.topOfThePage}>
        <h3 className={classes.pageHeader}>הפלייליסטים שלי </h3>
        <button className={classes.addPlayListButton} onClick={handleClickOpen}>
          <AddIcon />צור פלייליסט </button>
      </div>
      <List className={classes.Playlists} >
        {playLists.map((playlist) => (
          <PlayList
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            songIds={playlist.songIds}
          />
        ))}

      </List>
      <AddPlaylistDialog open={open} handleClose={handleClose} />

    </>
  )
}

export default PlaylistsPage