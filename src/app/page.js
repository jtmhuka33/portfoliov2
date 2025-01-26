"use client";

import { Container, Box, Typography } from '@mui/material';
import Introduction from './components/Introduction';
import Career from './components/Career';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h2" gutterBottom>
          Tadiwanashe John Mhuka
        </Typography>
        <Typography variant="subtitle1">
          I'm on a mission to create software that's stable, elegant and effortlessly effective
        </Typography>
      </Box>
      <Introduction />
      <Career />
      <Skills />
      <Projects />
    </Container>
  );
}
