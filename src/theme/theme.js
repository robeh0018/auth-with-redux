import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary:{
            main: '#648dae',
        },
        secondary: {
            main: '#0d47a1',
        },
        error: {
            main: red.A400,
        },
    },
});
