import { createTheme } from "@mui/material/styles";

export const colors = {
    primary:'#113f67',
    secondary : '#38598b',
    white: '#fff',
    primaryTransparent: 'rgba(17, 63, 103, 0.5)'
}



const theme  = createTheme({
    palette:{
        primary:{
            main: colors.primary
        },
        secondary:{
            main : colors.secondary
        },
        primaryTransparent : {
            main: colors.primaryTransparent
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    position: 'unset', // Enlever le 'position: relative'
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'unset', // Assurez-vous que la carte est positionnée
                    zIndex: 1, // Un z-index inférieur à celui de la navbar
                },
            },
        },
    },
});

export default theme