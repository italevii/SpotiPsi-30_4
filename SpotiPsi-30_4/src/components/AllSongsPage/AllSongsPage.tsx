import SongsTable from "../songsTable/songsTable";
import type { Song } from "../../assets/types"
import useStyles from "./AllSongsPageStyle.ts"
interface Props {
    songList: Array<Song>;
}
const AllSongsPage = ({ songList }: Props) => {
    const { classes } = useStyles();

    return (
        <>
            <h1 className={classes.topOfThePage} >כל השירים</h1>
            {<SongsTable songList={songList} />}
        </>
    )
}

export default AllSongsPage