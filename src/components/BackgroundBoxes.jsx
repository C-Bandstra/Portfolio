import { useState } from 'react'
import { theme } from '../styles/theme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const BackgroundBoxes = () => {
  let vp = window.innerWidth;
  // < 600
  
  const buildBoxes = () => {
    const loopCount = [...Array(110).keys()];
    return loopCount.map(index => {
      let randomSize = Math.round(Math.random() * 1);
      let vpDecision = window.innerWidth < 600 ? 100 : 200;
      return (
        <Grid key={index} item xs={4} sm={3} md={2.5} lg={2} xl={1.5}>
          <Paper sx={{height: `${randomSize * vpDecision}px`, backgroundColor: theme.palette.secondary.turquoise, opacity: "0.1", borderRadius: '5px', border: randomSize === 1 ?  `5px solid ${theme.palette.secondary.blueGrey}`: ""}}>

          </Paper>
        </Grid>
      )
    })
  }

  const buildBackground = () => {
      let background = buildBoxes() 
      return background;
    }


    const [background, setBackground] = useState(buildBackground());
    
    setTimeout(() => {
      setBackground(buildBackground());
    }, 5000)
      
  return (
    <Box sx={{position: 'relative'}}>
        <Grid container spacing={2} sx={{position: 'absolute'}}>
            { background }
        </Grid>
    </Box>
  )
}

export default BackgroundBoxes;
