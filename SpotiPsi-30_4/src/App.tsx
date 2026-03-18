import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useEffect, useState, createContext } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import { fetchPlaylists } from './components/HelperFunctions/FetchPlaylists';

interface FavoritesContextType {
  favoriteSongsList: string[];
  setFavoriteSongsList: React.Dispatch<React.SetStateAction<string[]>>;
}
interface reRenderPlaylistsContextType {
  reRenderPlayList: boolean;
  setReRenderPlayList: React.Dispatch<React.SetStateAction<boolean>>;
}
const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
const serverPlayLists = await fetchPlaylists()

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const reRenderPlaylistsContext = createContext<reRenderPlaylistsContextType | null>(null);

function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState("songs");
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState<string[]>(favoriteSongs)
  const [playLists, setPlaylists] = useState(serverPlayLists)
  const [reRenderPlayList, setReRenderPlayList] = useState<boolean>(true)

  const changePage = (pageType: string) => {
    setCurrentPage(pageType);
  };
  useEffect(() => {
    setSongList(allSongs)
    console.log(songList)

  }, [songList])

  useEffect(() => {
    const fetchData = async () => {
    const serverPlayLists = await fetchPlaylists()
    setPlaylists(serverPlayLists)
  }

  fetchData()
  }, [reRenderPlayList])
 


  return (
    <div className={classes.body}>
      <Header />
      <reRenderPlaylistsContext.Provider value={{reRenderPlayList, setReRenderPlayList}}>
        <FavoritesContext.Provider value={{ favoriteSongsList, setFavoriteSongsList }}>
          <MainSection changePage={changePage} pageType={currentPage} songList={songList} playLists={playLists} />
        </FavoritesContext.Provider>
      </reRenderPlaylistsContext.Provider>

      <Player />
    </div>
  );
}

export default App;