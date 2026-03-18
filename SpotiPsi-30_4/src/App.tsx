import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useEffect, useState } from 'react';
import { fetchSongs } from './components/HelperFunctions/FetchSongs';

const data = await fetchSongs()
function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState("songs");
  const [songList,setSongList] = useState([])

  const changePage = (pageType: string) => {
    setCurrentPage(pageType);
  };
  useEffect(() =>{
  setSongList(data)
  console.log(songList)

  },[songList])
  return (
    <div className={classes.body}>
      <Header />
      <MainSection changePage={changePage} />
      <Player />
    </div>
  );
}

export default App;