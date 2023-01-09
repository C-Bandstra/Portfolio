import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    palette: {
        type: 'dark',
        primary: {
          main: '#232323',
        },
        secondary: {
          main: '#ffffff',
        },
    },
    typography: {
        h3: {
            fontSize: '3rem',
            '@media (max-width: 250px)': {
                fontSize: '1rem',
              },
            '@media (min-width: 250px)': {
                fontSize: '1rem',
              },
            '@media (min-width: 500px)': {
                fontSize: '2rem',
              },
            '@media (min-width: 800px)': {
                fontSize: '3rem',
              },
        },
        h2: {

        }
    }
});