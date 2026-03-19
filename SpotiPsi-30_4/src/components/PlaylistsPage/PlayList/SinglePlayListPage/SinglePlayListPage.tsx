import SongsTable from '../../../songsTable/songsTable';
import type {Song } from '../../../../assets/types';
import { useLocation } from 'react-router-dom';
import useStyles from './SinglePlayListPageStyle';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <div className={classes.topOfThePage} >
        <h1 className={classes.pageHeader}>{playListName}</h1>
        <ArrowBackIcon className={classes.goBackButton} onClick={goBackToPlaylists}> go back</ArrowBackIcon>
        </div>
        <SongsTable songList={playListSongs} />
      </div>
    </>
  );
};

export default SinglePlayListPage;