import useStyles from "./PlayerStyle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { PlayerContext } from "../../App";

const Footer = () => {
    const { classes } = useStyles();
    const playerContext = useContext(PlayerContext);
    if (!playerContext) return null;

    const { currentSong, setCurrentSong, isPlaying, setIsPlaying, queue, setQueue, currentTime, setCurrentTime, duration, setDuration } = playerContext;

    return (
        <Box className={classes.footer} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.1 }}>
            <Typography className={classes.song_name}>
                {currentSong?.name} 
            </Typography >
            <Typography className={classes.artist_name}>
                {currentSong?.artist} 
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: "1vw" }}>
                <SkipPreviousIcon className={classes.skip_icons} />
                <PlayArrowIcon className={classes.player_icon} />
                <SkipNextIcon className={classes.skip_icons} />
            </Box>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={currentTime}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setCurrentTime(value)}
                className={classes.slider}
            />
        </Box>
    )
}

export default Footer