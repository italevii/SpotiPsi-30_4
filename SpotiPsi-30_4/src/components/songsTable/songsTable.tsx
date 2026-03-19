import useStyles from "./songsTableStyles";
import SongDisplay from "../songDisplay/songDisplay";
import type { Song } from "../../assets/types"
import { CheckInFavorite } from "../HelperFunctions/CheckSongInFavorites"
import { useContext } from "react";
import { FavoritesContext } from "../../App";
import { PlayerContext } from "../../App";
interface Props {
  songList: Array<Song>;
}

const SongsTable = ({ songList }: Props) => {
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


  const playSong = (id: string) => {
    setCurrentSong(songList[parseInt(id)-1])
    setIsPlaying(true)
    let audio = new Audio(`/songs/${id}.mp3`)
    let Queue: Song[] = []

    if (parseInt(id) <= songList.length && parseInt(id) > 0) {
      for (var i = parseInt(id) - 1; i < (parseInt(id) + songList.length - 1); i++) {
        Queue.push(songList[i % songList.length]);
      }
    }
    console.log(Queue)
    audio.play()
  }

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
          onClick={() => playSong(song.id)}
        />
      ))}
    </div>
  );
};

export default SongsTable;