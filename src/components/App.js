import NavBar from './NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import CustomBox from './Box'
import Typography from '@mui/material/Typography';
import BackgroundBoxes from './BackgroundBoxes.jsx';
// import { black, white } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../styles/theme'
import { useState } from 'react';

const Portfolio = () => {
  const styles = {
    appBar: {
      backgroundColor: theme.palette.primary.navy,
      fontFamily: 'Montserrat',
      boxShadow: '0px 0px 0px 0px',
      opacity: 0.9
      
    },
    landingBox: {
      padding: '10px',
    },
    box: {
      borderBottom: "10px solid",
      borderColor: theme.palette.secondary.turquoise,
      minHeight: '90vh',
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
    paper: {
      border: '2px solid red',
      height: '200px',
      width: '200px'
    },
    main: {
      backgroundColor: theme.palette.primary.navy,
      overflow: 'hidden'
    }
  }

   //backgroubd scrolls slower than content
   //scroll per 100 units could reset squares   

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box style={styles.main}>
          <BackgroundBoxes />
          <Box id="app" sx={{height: '190vh'}}>
            <AppBar position='sticky' sx={styles.appBar}>
              < NavBar />
            </AppBar>
            <Box sx={styles.box}>
              <Box sx={styles.landingBox}>
                <Typography variant="h5" sx={[styles.landingTextSmall, {zIndex: '2'}]}>Hi, my name is</Typography>
                <Typography variant="h1" sx={[styles.landingTextBig, {zIndex: '2'}]}>Charlie Bandstra.</Typography>
                <Typography variant="h1" sx={[styles.landingTextBig ,{zIndex: '2'}]}>Let's build something cool.</Typography>
              </Box>
            </Box>
            <Box sx={[styles.box, { pr: "0px"}]}>
              
            </Box>

          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Portfolio;
