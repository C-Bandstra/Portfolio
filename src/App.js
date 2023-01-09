import './App.css';
import NavBar from './NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { black, white } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme'
import { Height } from '@mui/icons-material';

const Portfolio = () => {

  const styles = {
    appBar: {
      width: '100vw'
    },
    landingBox: {
      // '& .MuiBox-root': {
        border: '1px solid black',
        padding: '10px'
       
      // }
    },
    box: {
      // '& .MuiBox-root': {
      // }
      // backgroundColor: '#000000',
      border: '1px solid black',
      height: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'left',
      pr: '25vw'
    },
    landingText: {
      // fontFamily: 'Montserrat, sans-serif',
    },
  }

  // theme.typography.h3 = {
  //   fontSize: '1.2rem',
  //   '@media (min-width:600px)': {
  //     fontSize: '1.5rem',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: '2rem',
  //   },
  // };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <Box sx={styles.box}> */}
          <AppBar position='sticky' sx={styles.appBar} color="secondary">
            <NavBar />
          </AppBar>
          <Box sx={styles.box}>
            <Box sx={styles.landingBox}>
              <Typography variant="h3" sx={[styles.landingText, ]}>Hi, my name is</Typography>
              <Typography variant="h3" sx={[styles.landingText,]}>Charlie Bandstra</Typography>
              <Typography variant="h3" sx={[styles.landingText,]}>I build stuff on the web</Typography>
              <Typography variant="h3" sx={[styles.landingText,]}>Look up Brittany Chiang's portfolio</Typography>
            </Box>
          </Box>
        {/* </Box> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Portfolio;
