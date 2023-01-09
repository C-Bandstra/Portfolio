import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#232323',
          navy: '#0a192f'
        },
        secondary: {
          main: '#ffffff',
          turquoise: '#64ffda',
          blueGrey: '#ccd6f6'
        },
    },
    typography: {
        fontFamily: [
          'Montserrat',
          'sans-serrif',
        ].join(','),
        h1: {
          color: '#fff',
          fontSize: '80px'
        },
        h2: {
          color: '#fff'
        },
        h3: {
            fontSize: '3rem',
            color: '#fff',
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
        h4: {
          color: '#fff'
        },
        h5: {
          color: '#fff',
          fontFamily: [
            'Fira Code', 'monospace',
          ].join(','),
        },
        navTabs: {
          fontFamily: [
            'Fira Code', 'monospace',
          ].join(','),
        }
    }
});