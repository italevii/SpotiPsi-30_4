import useStyles from "./songDisplayStyles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface Props {
    id: string
    name: string
    artist: string
    album: string
    isFavorite: boolean
}

const SongDisplay = ({ id, name, artist, album, isFavorite }: Props) => {
    const { classes } = useStyles();

    function FavoriteStatus({ isInFavorites }: { isInFavorites: boolean }) {
        if (isInFavorites) {
            return <FavoriteIcon className={classes.icons} />;
        } else {
            return <FavoriteBorderIcon className={classes.icons} />;
        }
    }
    return (
        <>
            <div className={classes.song_div}>
                <div className={classes.inner_div}>
                    <PlayArrowIcon className={classes.play_icon} />
                    <p>{name}-{artist}</p>
                </div>
                <div className={classes.inner_div}>
                    <AddIcon className={classes.icons} />
                    <FavoriteStatus isInFavorites = {isFavorite} />
                    {/* <FavoriteBorderIcon className={classes.icons} /> */}
                </div>
            </div>
        </>
    )
}

export default SongDisplay