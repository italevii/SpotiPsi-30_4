import useStyles from "./songDisplayStyles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    id: string
    name: string
    artist: string
    album: string
}

const SongDisplay = ({ id, name, artist, album }: Props) => {
    const { classes } = useStyles();

    return (
        <>
            <div className={classes.song_div}>
                <div className={classes.inner_div}>
                    <PlayArrowIcon className={classes.play_icon} />
                    <p>{name}-{artist}</p>
                </div>
                <div className={classes.inner_div}>
                    <AddIcon className={classes.icons} />
                    <FavoriteBorderIcon className={classes.icons} />
                </div>
            </div>
        </>
    )
}

export default SongDisplay