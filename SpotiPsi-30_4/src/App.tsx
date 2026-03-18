import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useEffect, useState } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';


const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState("songs");
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState([])
  const changePage = (pageType: string) => {
    setCurrentPage(pageType);
  };
  useEffect(() => {
    setSongList(allSongs)
    console.log(songList)

  }, [songList])

  useEffect(() => {
    setFavoriteSongsList(favoriteSongs)
    console.log(favoriteSongsList)
  }, [favoriteSongsList])
  return (
    <div className={classes.body}>
      <Header />
      <MainSection changePage={changePage} pageType={currentPage} songList = {songList} favoriteSongs ={favoriteSongsList} />
      <Player/>
    </div>
  );
}

export default App;