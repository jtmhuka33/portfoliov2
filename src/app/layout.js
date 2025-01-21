import { Container, Box, Typography } from '@mui/material';

import Introduction from './components/Introduction';
import Career from './components/Career';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
  <html lang="en">
    <body>
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h2" gutterBottom>
          My Portfolio
        </Typography>
        <Typography variant="subtitle1">
          Welcome to my personal software engineer portfolio.
        </Typography>
      </Box>

      <Introduction />
      <Career />
      <Skills />
      <Projects />
    </Container>
    </body>
  </html>
  );
}