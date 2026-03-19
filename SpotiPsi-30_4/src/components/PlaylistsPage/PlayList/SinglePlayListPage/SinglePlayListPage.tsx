import SongsTable from '../../../songsTable/songsTable';
import type { Playlist, Song } from '../../../../assets/types';
import { useLocation } from 'react-router-dom';
import useStyles from './SinglePlayListPageStyle';
import { useNavigate } from "react-router-dom";

interface Props {
  songList: Array<Song>;
}

const SinglePlayListPage = ({ songList }: Props) => {
    const navigate = useNavigate();

  const location = useLocation();
  const {classes} = useStyles()
  const { playListName, songIds } = location.state || {};

  let playListSongs = songList.filter(song => songIds?.includes(song.id));
  const goBackToPlaylists = () =>{
    navigate('/playlists')
  }
  return (
    <>
      <div>
        <h1 className={classes.topOfThePage}>{playListName}</h1>
        <button className={classes.goBackButton} onClick={goBackToPlaylists}> go back</button>
        <SongsTable songList={playListSongs} />
      </div>
    </>
  );
};

export default SinglePlayListPage;