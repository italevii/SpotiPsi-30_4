import { ListItem } from '@mui/material';
import useStyles from './PlayListStyle';
import { useNavigate } from "react-router-dom";

interface Props {
    id: string;
    name: string;
    songIds: Array<string>;
}

const PlayList = ({ id, name, songIds}: Props) => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const goToPlayListPage = () =>{
        navigate(`/current_playlist/${id}` ,{state:{playListName:name,songIds}})
    }
    return (
        <>
        <ListItem className={classes.playListDiv} onClick = {goToPlayListPage}>
            <div>
            <p>{name}</p>
            <p className={classes.songsCount}>  {songIds.length} שירים </p>
            </div>
        </ListItem>
        </>
    )
}

export default PlayList