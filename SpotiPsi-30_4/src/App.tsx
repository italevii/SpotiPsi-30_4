
import Header from './components/Header/Header'
import useStyles from './AppStyle';
import Player from './components/Player/Player';
import MainSection from './components/MainSection/MainSection';
function App() {
      const { classes } = useStyles();

  return (
    <div className={classes.body}>
    <Header/>
    <MainSection/>
    <Player/>
    </div>
  )
}

export default App
