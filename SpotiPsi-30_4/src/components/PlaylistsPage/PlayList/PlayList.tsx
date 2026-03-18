import { ListItem } from '@mui/material';
import useStyles from './PlayListStyle';
interface Props {
    id: string;
    name: string;
    songIds: Array<string>
    enterPlayListPage:() => void;
}

const PlayList = ({ id, name, songIds,enterPlayListPage }: Props) => {
    const { classes } = useStyles();

    return (
        <>
        <ListItem className={classes.playListDiv} onClick = {enterPlayListPage} >
            <div>
            <p>{name}</p>
            <p className={classes.songsCount}>  {songIds.length} שירים </p>
            </div>
        </ListItem>

        </>
    )
}

export default PlayList