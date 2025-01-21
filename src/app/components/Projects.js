"use client";
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'Description for Project One...',
    url: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'Description for Project Two...',
    url: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" gutterBottom>
        Latest GitHub Projects
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              backgroundColor: 'background.paper',
              color: 'text.primary',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.open(project.url, '_blank')}
              >
                View on GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
