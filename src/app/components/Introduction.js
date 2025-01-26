"use client";
import { Box, Typography } from '@mui/material';

function Introduction() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1">
        Hello! I’m [Your Name], a passionate software engineer with experience in
        building high-quality web applications. I enjoy tackling interesting
        problems and creating delightful user experiences.
      </Typography>
    </Box>
  );
}

export default Introduction;
