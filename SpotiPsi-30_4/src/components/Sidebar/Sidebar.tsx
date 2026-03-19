import useStyles from "./sideBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const ChangePage = (pageType:string) =>{
        if(pageType === "songs"){
            navigate('/')
        }
        if(pageType === "playlists"){
            navigate('/playlists')
        }
        if(pageType === "favorites"){
            navigate('/favorites')
        }
    }
    return (
        <>
            <div className={classes.sidebar}>
                <ul className={classes.listStyle}>
                    <li className={classes.listItem} onClick={() => ChangePage("songs")}
                    ><HomeIcon />
                        כל השירים
                    </li>
                    <li className={classes.listItem} onClick={() => ChangePage("playlists")}>
                        <LibraryMusicIcon />
                        פלייליסטים
                    </li>
                    <li className={classes.listItem} onClick={() => ChangePage("favorites")} >
                        <FavoriteIcon />
                        מועדפים
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar