import useStyles from "./songDisplayStyles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext,useState} from "react";
import { FavoritesContext } from "../../App";
import { updateFavorites } from "../../assets/HelperFunctions/UpdateFavorites";
import Popover from '@mui/material/Popover';
import AddToPlaylistPopOver from "../songsTable/addToPlaylistPopOver/AddToPlaylistPopOver";
import { PlayerContext } from "../../App";

interface Props {
    id: string
    name: string
    artist: string
    album: string
    isFavorite: boolean
    onClick: () => void;
}



const SongDisplay = ({ id, name, artist, album, isFavorite, onClick }: Props) => {
    const { classes } = useStyles();
    const favoritesContext = useContext(FavoritesContext);
    const playerContext = useContext(PlayerContext);


    if (!favoritesContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    if (!playerContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { favoriteSongsList, setFavoriteSongsList } = favoritesContext;
    const { currentSong, setCurrentSong, isPlaying, setIsPlaying, queue, setQueue, currentTime, setCurrentTime, duration, setDuration } = playerContext;
        const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)



    function FavoriteStatus({ isInFavorites }: { isInFavorites: boolean }) {
        if (isInFavorites) {
            return <FavoriteIcon className={classes.purple_icon} />;
        } else {
            return <FavoriteBorderIcon className={classes.icons} />;
        }
    }
    
    const ClickFavorites = () => {
        if (isFavorite) {
            setFavoriteSongsList(prev => prev.filter(songId => songId !== id));

        }
        else {
            setFavoriteSongsList(prev => [...prev, id])
        }
        updateFavorites(favoriteSongsList, id)
        isFavorite = !isFavorite
    }
    const handleClick = (e) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const popOverId = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className={id == currentSong?.id ?  classes.playing_song_div : classes.song_div} onClick={onClick}>
                <div className={classes.inner_div}>
                    <PlayArrowIcon className={classes.purple_icon} />
                    <p>{name}-{artist}</p>
                </div>
                <div className={classes.inner_div}  >
                    <AddIcon className={classes.icons} onClick={handleClick} />
                        <Popover
                        id={popOverId}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                    >

                    <AddToPlaylistPopOver songId ={id}/>
                    </Popover>
                    <div className={classes.inner_div} onClick={(e) => { e.stopPropagation(); ClickFavorites(); }}>
                        <FavoriteStatus isInFavorites={isFavorite} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SongDisplay