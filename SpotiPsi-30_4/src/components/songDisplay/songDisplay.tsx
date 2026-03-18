import useStyles from "./songDisplayStyles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from "react";
import { FavoritesContext } from "../../App";

interface Props {
    id: string
    name: string
    artist: string
    album: string
    isFavorite: boolean
}

const SongDisplay = ({ id, name, artist, album, isFavorite }: Props) => {
    const { classes } = useStyles();
    const favoritesContext = useContext(FavoritesContext);

    if (!favoritesContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { favoriteSongsList, setFavoriteSongsList } = favoritesContext;

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
        else{
            setFavoriteSongsList(prev => [...prev, id])
        }
        isFavorite = !isFavorite
    }

    return (
        <>
            <div className={classes.song_div}>
                <div className={classes.inner_div}>
                    <PlayArrowIcon className={classes.purple_icon} />
                    <p>{name}-{artist}</p>
                </div>
                <div className={classes.inner_div}>
                    <AddIcon className={classes.icons} />
                    <div className={classes.inner_div} onClick={ClickFavorites}>
                        <FavoriteStatus isInFavorites={isFavorite} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SongDisplay