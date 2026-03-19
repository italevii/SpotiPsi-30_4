import SongDisplay from "../songDisplay/songDisplay";
import type { Song } from "../../assets/types";
import { CheckInFavorite } from "../../assets/HelperFunctions/CheckSongInFavorites";
import { useContext } from "react";
import { FavoritesContext } from "../../App";
import useStyles from "./songsTableStyles";
import useAudioPlayer from "../useAudioPlayer/useAudioPlayer";

interface Props {
  songList: Array<Song>;
}

const SongsTable = ({ songList }: Props) => {
  const { classes } = useStyles();
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("FavoritesContext must be used inside FavoritesProvider");
  }

  const { favoriteSongsList } = favoritesContext;
  const { playSong } = useAudioPlayer();

  const buildQueue = (clickedSongId: string): Song[] => {
    const songIndex = songList.findIndex((song) => song.id === clickedSongId);

    if (songIndex === -1) return [];

    const newQueue: Song[] = [];

    for (let i = songIndex; i < songIndex + songList.length; i++) {
      newQueue.push(songList[i % songList.length]);
    }

    return newQueue;
  };

  const handlePlaySong = (song: Song) => {
    const newQueue = buildQueue(song.id);
    playSong(song, newQueue);
  };

  return (
    <div>
      {songList.map((song) => (
        <SongDisplay
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          isFavorite={CheckInFavorite(favoriteSongsList, song.id)}
          onClick={() => handlePlaySong(song)}
        />
      ))}
    </div>
  );
};

export default SongsTable;