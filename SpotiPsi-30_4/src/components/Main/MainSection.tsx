import PageContent from "../PageContent/PageContent";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./MainSectionStyle";


interface Props{
    changePage:(pageType:string) => MouseEventHandler<HTMLLIElement>
    pageType:string;
    songList:Array<Object>;
    favoriteSongs:Array<string>
}
const MainSection = ({changePage,pageType,songList,favoriteSongs}:Props) =>{
      const { classes } = useStyles();

    return(
        <div className={classes.MainSection}>
        <SideBar changePage = {changePage}/>
        <PageContent pageType = {pageType} songList={songList} favoriteSongs = {favoriteSongs} />
        </div>

    )
}

export default MainSection