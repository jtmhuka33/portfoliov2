"use client";
import { Avatar, Box, Typography } from '@mui/material';
import MyImage from '../Images/MyImage.png';

function Introduction() {
  return (
    <Box component="section" sx={{
       mb: 8,
       mt: 8,
       display: 'flex',
       flexDirection: {xs: 'column', sm: 'row'},
       alignItems: { xs: 'center', sm: 'center'},
       justifyContent: {xs: 'center', sm: 'space-between'},
       gap:4,
      }}
    >
      <Avatar 
        sx={{
          width: { sm: 200, xs: 300}, 
          height: { sm: 200, xs: 300}, 
          border: '1px grey solid',
          mb: {xs: 4, sm: 0}
        }} 
        alt='Tadiwanashe John Mhuka' 
        src={MyImage.src} 
      />
      <Typography
        alignContent="center"
      >
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
