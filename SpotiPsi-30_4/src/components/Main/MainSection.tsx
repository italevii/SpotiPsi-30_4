import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";
import SongsTable from "../songsTable/songsTable";
interface Props {
    changePage: (pageType: string) => MouseEventHandler<HTMLLIElement>
}
interface song {
    id: string
    name: string
    artist: string
    album: string
}
const MainSection = ({ changePage }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.MainSection}>
            <SongsTable />
            <SideBar changePage={changePage} />
        </div>

    )
}

export default MainSection