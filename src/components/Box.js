import React from 'react'
import Box from '@mui/material/Box';
import { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

const CustomBox = ({ boxNum, rainbow, mouseDown }) => {
    const [hasBeenHovered, setHovered] = useState(false);
    const styles = {
        mazeBox: {
            width: '5px',
            height: '5px',
            '& .MuiBox-root': {
                aspectRatio: '1'

            }
            // '&:hover': {
            // backgroundColor: (e) => {
            //     // console.log(e.target)
            //     //find element id and call a function to change its color
            // },
            // },
        }
    }

    const handleColor = () => {
        if(hasBeenHovered) {
            return rainbow[Math.floor(Math.random() * rainbow.length)]
        } else if(!mouseDown) {
            return "black"
        } else {
            return "black"
        }
    }
    return (
        <AspectRatio minHeight={120} maxHeight={200}>
            <Box 
                onMouseEnter={() => mouseDown ? setHovered(true) : ""}
                // sx={[styles.mazeBox, { backgroundColor: mouseDown && hasBeenHovered  ? rainbow[Math.floor(Math.random() * rainbow.length)] : "black"}]}
                sx={[styles.mazeBox, { backgroundColor: () => handleColor()}]}
                key={boxNum}>

            </Box>
        </AspectRatio>
    )
}

export default CustomBox;
