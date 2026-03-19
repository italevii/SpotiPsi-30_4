import SongDisplay from "../songDisplay/songDisplay";
import type {Song} from "../../assets/types"
import {CheckInFavorite} from "../../assets/HelperFunctions/CheckSongInFavorites"
import { useContext } from "react";
import { FavoritesContext } from "../../App";

interface Props {
  songList: Array<Song>;
}

const SongsTable = ({ songList}: Props) => {
  const favoritesContext = useContext(FavoritesContext);

    if (!favoritesContext) {
        throw new Error("FavoritesContext must be used inside FavoritesProvider");
    }
    const { favoriteSongsList } = favoritesContext;

  return (
    <div>
      {songList.map((song) => (
        <SongDisplay
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          isFavorite = {CheckInFavorite(favoriteSongsList,song.id)}
        />
      ))}
    </div>
  );
};

export default SongsTable;