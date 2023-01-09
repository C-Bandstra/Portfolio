import './App.css';
import NavBar from './NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { black, white } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme'

const Portfolio = () => {

  const styles = {
    appBar: {
      width: '100vw',
      backgroundColor: theme.palette.primary.navy,
      fontFamily: 'Montserrat',
      boxShadow: '0px 0px 0px 0px',
      
    },
    landingBox: {
      padding: '10px'
    },
    box: {
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'left',
      backgroundColor: theme.palette.primary.navy,
      pr: '25vw'
    },
    landingTextSmall: {
      color: theme.palette.secondary.turquoise,
    },
    landingTextBig: {
      color: theme.palette.secondary.blueGrey,
    },
  }

  // theme.typography.landingText = {
    // fontSize: '1.2rem',
    // '@media (min-width:600px)': {
    //   fontSize: '1.5rem',
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '2rem',
    // },
    // fontFamily
  // };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <AppBar position='sticky' sx={styles.appBar}>
            <NavBar />
          </AppBar>
          <Box sx={styles.box}>
            <Box sx={styles.landingBox}>
              <Typography variant="h5" sx={[styles.landingTextSmall,]}>Hi, my name is</Typography>
              <Typography variant="h1" sx={[styles.landingTextBig,]}>Charlie Bandstra.</Typography>
              <Typography variant="h1" sx={[styles.landingTextBig,]}>Let's get in touch</Typography>
            </Box>
          </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Portfolio;
