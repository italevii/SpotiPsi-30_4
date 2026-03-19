import useStyles from "./HeaderStyle";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
const Header = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.header}>
            <h2 className={classes.headerText}>SpotiPsi <MusicNoteIcon /></h2>
        </div>
    )
}

export default Header