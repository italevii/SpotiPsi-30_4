
import Header from './components/Header/Header'
import useStyles from './AppStyle';
import Player from './components/Player/Player';
function App() {
      const { classes } = useStyles();

  return (
    <div className={classes.body}>
    <Header/>
    <Player/>
    </div>
  )
}

export default App
