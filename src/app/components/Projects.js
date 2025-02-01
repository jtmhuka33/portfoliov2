"use client";
import { Box, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

// Create motion-enhanced components
const MotionBox = motion(Box);
const MotionLaunchIcon = motion(LaunchIcon);

const projects = [
  {
    title: 'Portfolio Simplified V2',
    description: `
      This is my portfolio website. It is a simplified version of my original portfolio website. 
      It is built using React and Material-UI.
    `,
    url: 'https://www.github.com/jtmhuka33/portfoliov2',
    skills: [
      'React ·\u00A0',
      'Material-UI ·\u00A0',
      'JavaScript ·\u00A0',
      'Next.js ·\u00A0',
      'Framer Motion',
    ],
  },
  {
    title: 'DatAI',
    description: `
      DatAI is my Bachelor's thesis project. 
      It is a VSCode extension that helps developers scaffold PostgreSQL Databases by generating table schemas,
      views, and REST helper stored functions using the OpenAI API (GPT-4o).
    `,
    url: 'https://www.github.com/jtmhuka33/datai',
    skills: [
      'TypeScript ·\u00A0',
      'VSCode API ·\u00A0',
      'PostgreSQL ·\u00A0',
      'OpenAI API',
    ],
  },
];

// Variants for the outer container that wraps all projects.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each project card.
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Variants for inner child elements (title, description, etc.).
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Variants for the skills container to stagger the animation of each skill.
const skillsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for each individual skill.
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

function Projects() {
  return (
    <MotionBox
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: { xs: 4, sm: 8 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {projects.map((project, index) => (
        <MotionBox
          key={index}
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 2,
            border: 1,
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            borderColor: 'grey.800',
            textDecoration: 'none', 
            "&:hover": { cursor: 'pointer' },
          }}
          variants={projectVariants}
          whileHover={{ scale: 1.03 }}
        >
          {/* Title and Icon */}
          <MotionBox
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'text.secondary',
              mb: 2,
            }}
            variants={childVariants}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              {project.title}
            </Typography>
            <MotionLaunchIcon
              sx={{ fontSize: { xs: '1rem', sm: 'inherit' } }}
              whileHover={{ scale: 1.2 }} 
            />
          </MotionBox>

          {/* Description */}
          <MotionBox mb={2} variants={childVariants}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'white'}}
            >
              {project.description}
            </Typography>
          </MotionBox>

          {/* Skills */}
          <MotionBox
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            variants={skillsContainerVariants}
          >
            {project.skills.map((skill, idx) => (
              <MotionBox key={idx} variants={skillItemVariants}>
                <Typography
                  color="lightPink"
                  variant="caption"
                  sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                >
                  {skill}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </MotionBox>
      ))}
    </MotionBox>
  );
}

export default Projects;
