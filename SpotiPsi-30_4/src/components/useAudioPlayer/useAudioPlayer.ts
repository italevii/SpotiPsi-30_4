import { useContext, useEffect } from "react";
import { PlayerContext } from "../../App";
import type { Song } from "../../assets/types";

const useAudioPlayer = () => {
    const playerContext = useContext(PlayerContext);

    if (!playerContext) {
        throw new Error("PlayerContext must be used inside PlayerContext.Provider");
    }

    const { currentSong, setCurrentSong, isPlaying, setIsPlaying, queue, setQueue, currentTime, setCurrentTime, duration, setDuration, audioRef } = playerContext;

    const playSong = (song: Song, newQueue: Song[]) => {
        setCurrentSong(song);
        setQueue(newQueue);
        if (!audioRef.current) return;
        audioRef.current.src = `/songs/${song.id}.mp3`;
        setDuration(audioRef.current.duration);
        console.log(duration)
        audioRef.current.play();
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }

    };

    const playNext = () => {
        if (!currentSong || queue.length === 0) return;

        const index = queue.findIndex((song) => song.id === currentSong.id);
        const nextSong = queue[(index + 1) % queue.length];
        playSong(nextSong, queue);
    };

    const playPrev = () => {
        if (!currentSong || queue.length === 0) return;

        const index = queue.findIndex((song) => song.id === currentSong.id);
        const nextSong = queue[(index - 1 + queue.length) % queue.length];
        playSong(nextSong, queue);
    };
    const addTime = () => {
        setCurrentTime(currentTime + 1)
    }


    return {
        currentSong,
        isPlaying,
        queue,
        currentTime,
        duration,
        audioRef,
        playSong,
        togglePlayPause,
        playNext,
        playPrev,
        setCurrentTime,
        setDuration,
        addTime,
    };
};

export default useAudioPlayer