import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebar: {
        position: 'fixed',
        right: '0',
        width: '15%',
        height: '100%',
        backgroundColor: '#121212',
        color: 'white',
        borderLeft: '0.5px solid #2A2A2A',

    },
    listStyle: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '20%',
        width: '100%',
        marginTop: '0',
        alignItems: 'center',
        direction: 'rtl',

    },
    listItem: {
        "&:hover": {
            backgroundColor: '#2D2032',
        },
        width: '100%',
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        alignItems: 'center',
        gap: '13%'
    }
}));

export default useStyles;