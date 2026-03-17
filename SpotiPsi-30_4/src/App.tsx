import Header from './components/Header/Header';
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/Main/MainSection';
import { useState } from 'react';

function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState("songs");

  const changePage = (pageType: string) => {
    setCurrentPage(pageType);

  };

  return (
    <div className={classes.body}>
      <Header />
      <MainSection changePage={changePage} />
      <Player />
    </div>
  );
}

export default App;