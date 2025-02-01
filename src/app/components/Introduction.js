"use client";
import { Avatar, Box, Typography } from '@mui/material';
import MyImage from '../Images/MyImage.webp';
import { motion } from 'framer-motion';

// Create motion-enhanced components
const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);
const MotionTypography = motion(Typography);

// Parent container variants for staggering children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Child variants for a simple fade-in and slide-up effect
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function Introduction() {
  return (
    <MotionBox
      component="section"
      sx={{
        mb: 8,
        mt: 8,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'center' },
        justifyContent: { xs: 'center', sm: 'space-between' },
        gap: 4,
      }}
      // Animate on mount
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionAvatar
        sx={{
          width: { sm: 175, xs: 300 },
          height: { sm: 175, xs: 300 },
          border: '1px grey solid',
          mb: { xs: 4, sm: 0 },
        }}
        alt="Tadiwanashe John Mhuka"
        src={MyImage.src}
        variants={childVariants}
      />
      <MotionTypography
        alignContent="center"
        variants={childVariants}
      >
        Fueled by a childhood fascination with software development,
        I'm a web development enthusiast currently studying Interactive Media at the University of Augsburg.
        My passion for building games and websites led me to learn JavaScript, HTML, React, and CSS.
        With experience in remote work and a knack for tackling diverse tasks while maintaining balance,
        I'm eager to contribute my skills to your team.
      </MotionTypography>
    </MotionBox>
  );
}

export default Introduction;
