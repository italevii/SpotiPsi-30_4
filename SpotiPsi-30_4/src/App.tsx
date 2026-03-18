import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useEffect, useState } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import AllSongsPage from './components/AllSongsPage/AllSongsPage';
import FavoritePage from './components/FavoritePage/FavoritePage';
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
      <MainSection changePage={changePage} />
      <Player />
      <AllSongsPage songList={songList}/>
      <FavoritePage songList={songList} favoriteSongs={favoriteSongsList}/>
    </div>
  );
}

export default App;