import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import { useEffect, useState, createContext } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import { fetchPlaylists } from './components/HelperFunctions/FetchPlaylists';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from './components/Main/MainSection';
interface FavoritesContextType {
  favoriteSongsList: string[];
  setFavoriteSongsList: React.Dispatch<React.SetStateAction<string[]>>;
}

const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
const serverPlayLists = await fetchPlaylists()
export const FavoritesContext = createContext<FavoritesContextType | null>(null);


function App() {
  const { classes } = useStyles();
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState<string[]>(favoriteSongs)
  const [playLists,setPlaylists] = useState([])

  useEffect(() => {
    setSongList(allSongs)
    console.log(songList)

  }, [songList])

  
    useEffect(() => {
    setPlaylists(serverPlayLists)
  }, [playLists])
  

return (
  <BrowserRouter>
    <div className={classes.body}>
      <Header />
      <FavoritesContext.Provider value={{ favoriteSongsList, setFavoriteSongsList }}>
        <MainSection songList={songList} playLists={playLists} />
      </FavoritesContext.Provider>
      <Player />
    </div>
  </BrowserRouter>
);
}

export default App;