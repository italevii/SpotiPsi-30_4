import useStyles from "./PlayerStyle";
const Footer = () => {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.footer}>נגן שירים</div>
        </>
    )
}

export default Footer