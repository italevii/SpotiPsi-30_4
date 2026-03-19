import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import { useEffect, useState, createContext } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import { fetchPlaylists } from './components/HelperFunctions/FetchPlaylists';
import { BrowserRouter } from "react-router-dom";
import MainSection from './components/Main/MainSection';
import type { Playlist } from './assets/types';
interface FavoritesContextType {
  favoriteSongsList: string[];
  setFavoriteSongsList: React.Dispatch<React.SetStateAction<string[]>>;
}
interface reRenderPlaylistsContextType {
  reRenderPlayList: boolean;
  setReRenderPlayList: React.Dispatch<React.SetStateAction<boolean>>;
}
interface PlayListsContextType {
  playLists: Array<Playlist>;
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}
const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
const serverPlayLists = await fetchPlaylists()

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const reRenderPlaylistsContext = createContext<reRenderPlaylistsContextType | null>(null);
export const PlayListsContext = createContext<PlayListsContextType | null>(null);
function App() {
  const { classes } = useStyles();
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState<string[]>(favoriteSongs)
  const [playLists, setPlaylists] = useState(serverPlayLists)
  const [reRenderPlayList, setReRenderPlayList] = useState<boolean>(true)

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
  <BrowserRouter>
    <div className={classes.body}>
      <Header />
      <PlayListsContext.Provider value = {{playLists,setPlaylists}}>
      <reRenderPlaylistsContext.Provider value={{reRenderPlayList, setReRenderPlayList}}>
        <FavoritesContext.Provider value={{ favoriteSongsList, setFavoriteSongsList }}>
          <MainSection songList={songList} playLists={playLists} />
        </FavoritesContext.Provider>
      </reRenderPlaylistsContext.Provider>
      </PlayListsContext.Provider>
      <Player/>
    </div>
  </BrowserRouter>
);

}

export default App;