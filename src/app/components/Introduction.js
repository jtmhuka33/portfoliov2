"use client";
import { Avatar, Box, Typography } from '@mui/material';
import MyImage from '../Images/MyImage.png';

function Introduction() {
  return (
    <Box component="section" sx={{
       mb: 8,
       mt: 8,
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
       gap:4,
      }}
    >
      <Avatar sx={{width: 100, height: 100, border: '1px grey solid'}} alt='Tadiwanashe John Mhuka' src={MyImage.src} />
      <Typography variant="body1">
      Fueled by a childhood fascination with software development,
      I'm a web development enthusiast currently studying Interactive Media at the University of Augsburg.
      My passion for building games and websites led me to learn JavaScript, HTML, React, and CSS.
      With experience in remote work and a knack for tackling diverse tasks while maintaining balance,
      I'm eager to contribute my skills to your team.
      </Typography>
    </Box>
  );
}

export default Introduction;
