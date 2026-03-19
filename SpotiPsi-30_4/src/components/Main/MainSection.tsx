import { Routes, Route } from "react-router-dom";
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";
import SideBar from "../Sidebar/Sidebar";
import type { Song,Playlist } from "../../assets/types";
import useStyles from "./MainSectionStyle";
import SinglePlayListPage from "../PlaylistsPage/PlayList/SinglePlayListPage/SinglePlayListPage";
interface Props{
    songList: Array<Song>;
    playLists:Array<Playlist>;
}

const MainSection = ({ songList, playLists }: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.MainSection}>
      <SideBar/>
      <Routes>
        <Route path="/" element={<AllSongsPage songList={songList} />} />
        <Route path="/favorites" element={<FavoritePage songList={songList} />} />
        <Route path="/playlists" element={<PlaylistsPage playLists={playLists} />}> </Route>
        <Route path="current_playlist/:id" element={<SinglePlayListPage songList = {songList}/>} />

      </Routes>
    </div>
  );
};

export default MainSection