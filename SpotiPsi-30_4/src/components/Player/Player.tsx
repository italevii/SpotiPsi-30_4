import useStyles from "./PlayerStyle";
const Footer = () =>{
      const { classes } = useStyles();

    return(
        <>
        <div className={classes.footer}>אין שירים</div>
        </>
    )
}

export default Footer