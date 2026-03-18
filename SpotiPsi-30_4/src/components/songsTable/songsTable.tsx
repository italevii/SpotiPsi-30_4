import useStyles from "./songsTableStyles";
import SongDisplay from "../songDisplay/songDisplay";
import type {Song} from "../../assets/types"
import {CheckInFavorite} from "../HelperFunctions/CheckSongInFavorites"
interface Props {
  songList: Array<Song>;
  favoriteSongList: Array<string>;
}

const SongsTable = ({ songList , favoriteSongList}: Props) => {
  const { classes } = useStyles();



  return (
    <div>
      {songList.map((song) => (
        <SongDisplay
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          isFavorite = {CheckInFavorite(favoriteSongList,song.id)}
        />
      ))}
    </div>
  );
};

export default SongsTable;