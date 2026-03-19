import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import { useEffect, useState, createContext } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';
import { fetchFavoriteSongs } from './components/HelperFunctions/FetchFavorites';
import { fetchPlaylists } from './components/HelperFunctions/FetchPlaylists';
import { BrowserRouter } from "react-router-dom";
import MainSection from './components/Main/MainSection';
import type { Song } from './assets/types';

interface FavoritesContextType {
  favoriteSongsList: string[];
  setFavoriteSongsList: React.Dispatch<React.SetStateAction<string[]>>;
}
interface reRenderPlaylistsContextType {
  reRenderPlayList: boolean;
  setReRenderPlayList: React.Dispatch<React.SetStateAction<boolean>>;
}
interface PlayerContextType {
  currentSong: Song | undefined;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song | undefined>>;

  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;

  queue: Song[];
  setQueue: React.Dispatch<React.SetStateAction<Song[]>>;

  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;

  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}

const allSongs = await fetchSongs()
const favoriteSongs = await fetchFavoriteSongs()
const serverPlayLists = await fetchPlaylists()

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const reRenderPlaylistsContext = createContext<reRenderPlaylistsContextType | null>(null);
export const PlayerContext = createContext<PlayerContextType | null>(null);

function App() {
  const { classes } = useStyles();
  const [songList, setSongList] = useState([])
  const [favoriteSongsList, setFavoriteSongsList] = useState<string[]>(favoriteSongs)
  const [playLists, setPlaylists] = useState(serverPlayLists)
  const [reRenderPlayList, setReRenderPlayList] = useState<boolean>(true)
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

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
        <PlayerContext.Provider
          value={{currentSong, setCurrentSong, isPlaying, setIsPlaying, queue, setQueue, currentTime, setCurrentTime, duration, setDuration}}>
          <Header />
          <reRenderPlaylistsContext.Provider value={{ reRenderPlayList, setReRenderPlayList }}>
            <FavoritesContext.Provider value={{ favoriteSongsList, setFavoriteSongsList }}>
              <MainSection songList={songList} playLists={playLists} />
            </FavoritesContext.Provider>
          </reRenderPlaylistsContext.Provider>
          <Player />
        </PlayerContext.Provider>

      </div>
    </BrowserRouter>
  );

}

export default App;