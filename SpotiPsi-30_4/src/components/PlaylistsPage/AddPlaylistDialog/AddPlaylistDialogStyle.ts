import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => ({
    Dialog: {
        backgroundColor: '#383838',
        color: '#fff',
        width: 400,
    },
    title: {
        textAlign: 'right',
        float:'right',
        marginBottom:'4%',
        
    },
    content: {
        direction: 'rtl',
    },
    input: {
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #898989',
        color: '#fff',
        padding: '8px 0',
        outline: 'none',
        fontSize: '14px',
    },
    buttons: {
        justifyContent: 'flex-end',
        direction: 'rtl',
    },
    createButton: {
        color: '#737373',
    },
    cancelButton: {
        color: '#694B75',
    },
}));

export default useStyles;