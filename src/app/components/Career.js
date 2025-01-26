"use client";
import { Box, Typography, Card, CardContent } from '@mui/material';

const careerData = [
  {
    company: 'Tech Company A',
    role: 'Software Engineer',
    duration: '2020 - Present',
    description: 'Working on building amazing features for cloud apps...',
  },
  {
    company: 'Startup B',
    role: 'Frontend Developer',
    duration: '2018 - 2020',
    description: 'Implemented UI/UX solutions using React and Redux...',
  },
];

function Career() {
  return (
    <Box component="section" sx={{ mb: 8, mt: 8, }}>
      <Typography variant="h4" gutterBottom>
        Career
      </Typography>

      {careerData.map((job, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            backgroundColor: 'background.paper',
            color: 'text.primary',
          }}
        >
          <CardContent>
            <Typography variant="h6">{job.company}</Typography>
            <Typography variant="subtitle1">
              {job.role} | {job.duration}
            </Typography>
            <Typography variant="body2">{job.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Career;
