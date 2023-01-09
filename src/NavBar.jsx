import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import { Link as RouterLink } from "react-router-dom";
import { theme } from './theme';

const NavBar = () => {
  const styles = {
    box: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    tabs: {
      "& .MuiButtonBase-root.MuiTab-root": {
        width: '10vw',
        color: theme.palette.primary.main,
        fontSize: '8px',
      },
    },
    tab: {
      width: '33%'
    }

  }
  const [value, setValue] = useState('about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.box}>
      <Tabs
        sx={styles.tabs}
        value={value}
        onChange={handleChange}
        textColor="primary"
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