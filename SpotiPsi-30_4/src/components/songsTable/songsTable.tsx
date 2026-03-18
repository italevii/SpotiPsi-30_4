import useStyles from "./songsTableStyles";
import SongDisplay from "../songDisplay/songDisplay";
import type {Song} from "../../assets/types"
interface Props {
  songList: Array<Song>;
}

const SongsTable = ({ songList }: Props) => {
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
        />
      ))}
    </div>
  );
};

export default SongsTable;