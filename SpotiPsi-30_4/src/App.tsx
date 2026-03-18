import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useEffect, useState } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import { fetchPlaylists } from './components/HelperFunctions/FetchPlaylists';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
const serverPlayLists = await fetchPlaylists()
function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState("songs");
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState([])
  const [playLists,setPlaylists] = useState([])
  const changePage = (pageType: string) => {
    setCurrentPage(pageType);
  };
  useEffect(() => {
    setSongList(allSongs)
    console.log(songList)

  }, [songList])

  useEffect(() => {
    setFavoriteSongsList(favoriteSongs)
  }, [favoriteSongsList])

    useEffect(() => {
    setPlaylists(serverPlayLists)
  }, [playLists])
  
    useEffect(() => {
    setPlaylists(serverPlayLists)
  }, [playLists])


  return (
    <div className={classes.body}>
      <Header />
      <MainSection changePage={changePage} pageType={currentPage} songList = {songList} favoriteSongs ={favoriteSongsList} playLists ={playLists} />
      <Player/>
    </div>
  );
}

export default App;