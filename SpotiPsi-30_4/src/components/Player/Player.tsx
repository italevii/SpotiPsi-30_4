import useStyles from "./PlayerStyle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useAudioPlayer from "../useAudioPlayer/useAudioPlayer";
import Typography from '@mui/material/Typography';
import { useContext, useEffect } from "react";
import { PlayerContext } from "../../App";

const Footer = () => {
    const { classes } = useStyles();
    const playerContext = useContext(PlayerContext);
    if (!playerContext) return null;

    const { currentSong, isPlaying, queue, currentTime, duration, audioRef, playSong, togglePlayPause, playNext, playPrev, setCurrentTime, setDuration,addTime } = useAudioPlayer();

    function TogglePlayPauseButton({ isPlaying }: { isPlaying: boolean }) {
        if (isPlaying) {
            return <PauseIcon className={classes.player_icon} onClick={togglePlayPause} />;
        } else {
            return <PlayArrowIcon className={classes.player_icon} onClick={togglePlayPause} />;
        }
    }
    useEffect(() => {
    const interval = setInterval(addTime, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [addTime])
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${ minutes }:${ seconds.toString().padStart(2, '0') }`;
    };
    return (
        <Box className={classes.footer} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.1 }}>
            <Typography className={classes.song_name}>
                {currentSong?.name}
            </Typography >
            <Typography className={classes.artist_name}>
                {currentSong?.artist}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: "1vw" }}>
                <SkipPreviousIcon className={classes.skip_icons} onClick={playPrev} />
                <TogglePlayPauseButton isPlaying={isPlaying} />
                <SkipNextIcon className={classes.skip_icons} onClick={playNext} />
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
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '190vh' }}>
                <Typography className={classes.duration}>
                    {formatTime(duration)}
                </Typography>
                <Typography className={classes.currentTime}>
                    {formatTime(currentTime)}
                </Typography>
            </Box>
            <audio ref={audioRef} />
        </Box>
    )
}

export default Footer