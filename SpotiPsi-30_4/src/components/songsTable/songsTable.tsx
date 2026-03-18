import useStyles from "./songsTableStyles";
import SongDisplay from "../songDisplay/songDisplay";
interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
}

interface Props {
  songs: Song[];
}

const SongsTable = ({ songs }: Props) => {
  const { classes } = useStyles();

  return (
    <div>
      {songs.map((song) => (
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