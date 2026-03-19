import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '18%',
        backgroundColor: '#1D1D1D',
        color: "#ffffff",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.3vh',
        borderTop: '#2A2A2A'
    },
    player_icon: {
        color: "#ffffff",
        fontSize: "2vw",
    },
    skip_icons: {
        color: "#ffffff",
        fontSize: "1.3vw",

    },
    song_name: {
        fontSize: '2.2vh'
    },
    artist_name: {
        fontSize: '1.7vh',
        color: "#8F979F",
    },
    slider: {
        height: '0.4vh',
        width: "97%",

        '& .MuiSlider-thumb': {
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            backgroundColor: '#9B59B6',
            width: '0.7vw',
            height: '0.7vw',

            '&::before': {
                boxShadow: '0 0.2vh 1.2vh 0 rgba(0,0,0,0.4)',
            },

            '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 0.8vh rgba(0,0,0,0.16)',
            },

            '&.Mui-active': {
                width: '2vh',
                height: '2vh',
            },
        },

        '& .MuiSlider-rail': {
            opacity: 0.28,
            height: '0.15vw',
            backgroundColor: '#9B59B6'
        },
        '& .MuiSlider-track': {
            backgroundColor: '#9B59B6',
            height: '0.15vw',
        },
        
    },
    duration: {
            marginRight: 'auto'

        },
        currentTime: {
            marginLeft: 'auto'
        }

}));

export default useStyles;