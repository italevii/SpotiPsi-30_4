import useStyles from "./sideBarStyle";

const SideBar = () =>{
      const { classes } = useStyles();

    return(
        <>
        <div className={classes.sidebar}>
            <li>כל השירים</li>
            <li>פלייליסטים</li>
            <li>מועדפים</li>
            <hr></hr>
        </div>
        </>
    )
}

export default SideBar