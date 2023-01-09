import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink } from "react-router-dom";
import { theme } from '../styles/theme';

const NavBar = () => {
  const styles = {
    box: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    tabs: {
      "& .MuiButtonBase-root.MuiTab-root": {
        width: '10vw',
        color: theme.palette.secondary.blueGrey,
        fontSize: '12px',
        fontFamily: theme.typography.navTabs,
        textTransform: 'capitalize',
        
      },
      "& .MuiButtonBase-root.MuiTab-root:hover" : {
        color: theme.palette.secondary.turquoise,
      },
      "& .MuiButtonBase-root.MuiTab-root:focus" : {
        color: theme.palette.secondary.turquoise,
      }
    },
    tab: {
      width: '33%',
      
    }
    
  }
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.box}>
      <Tabs
        sx={styles.tabs}
        value={value}
        onChange={handleChange}
        textColor={"primary"}
        TabIndicatorProps={{style: {background: theme.palette.secondary.turquoise}}}
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab sx={styles.tab} value="about" label="About" component={RouterLink} to="/about"/>
        <Tab sx={styles.tab} value="experience" label="Experience" component={RouterLink} to="/experience"/>
        <Tab sx={styles.tab} value="contact" label="Contact" component={RouterLink} to="/contact"/>
      </Tabs>
    </Box>
  );
}
export default NavBar;