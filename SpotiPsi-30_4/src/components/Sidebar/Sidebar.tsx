import useStyles from "./sideBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    changePage: (pageType: string) => MouseEventHandler<HTMLLIElement>
}
const SideBar = ({ changePage }: Props) => {
    const { classes } = useStyles();

    return (
        <>
            <div className={classes.sidebar}>
                <ul className={classes.listStyle}>
                    <li className={classes.listItem} onClick={() => changePage("songs")}
                    ><HomeIcon />
                        כל השירים
                    </li>
                    <li className={classes.listItem} onClick={() => changePage("playlist")}>
                        <LibraryMusicIcon />
                        פלייליסטים
                    </li>
                    <li className={classes.listItem} onClick={() => changePage("favorites")} >
                        <FavoriteIcon />
                        מועדפים
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar