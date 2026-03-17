import useStyles from "./HeaderStyle";
const Header = () =>{
      const { classes } = useStyles();

    return(
        <div className={classes.header}>
            <h2 className={classes.headerText}>SpotiPsi</h2>
        </div>
    )
}

export default Header