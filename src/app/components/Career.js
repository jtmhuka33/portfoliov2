"use client";
import { Box, Typography } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const careerData = [
  {
    company: 'A-Digital ONE GmbH',
    role: 'Software Developer',
    duration: 'May 2024 - Present',
    description: `Responsible for full-stack web development with Laravel in the backend and Vue.js in the frontend,
      using robust, scalable code and various databases (SQL, SQLite). I also handled containerisation with Docker
      and helped set up and maintain CI/CD pipelines. The team's productivity was increased through the consistent
      use of Scrum methods (refinements, sprint reviews) and a clearly structured approach to user stories.`,
    skills: [],
  },
  {
    company: 'viind GmbH',
    role: 'Software Developer',
    duration: 'Nov. 2022 - Apr. 2024',
    description: `Extended an AI-powered cross-platform chatbot solution, working on the front-end 
      (React, TypeScript, NextJS, React Native) and back-end (NestJS, Python). Through refinement and agile project 
      management using Scrum principles, I was able to continuously improve internal development processes`,
    skills: [],
  },
  {
    company: 'Anfema GmbH',
    role: 'Refurbishment and QA',
    duration: 'Nov. 2019 - Sep. 2020',
    description: `Responsible for quality assurance and refurbishment of hardware, including performing firmware 
      installations to ensure stable and reliable system performance.`,
    skills: [],
  },
];

// Variants for the main container to stagger the appearance of each career entry.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for each career entry.
const careerEntryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Variants for the header row (icon, role, company, duration).
const headerRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Career() {
  return (
    <MotionBox
      component="section"
      sx={{
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {careerData.map((position, index) => (
        <MotionBox
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 4,
          }}
          variants={careerEntryVariants}
        >
          <MotionBox
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              color: 'text.secondary',
              mb: 2,
            }}
            variants={headerRowVariants}
          >
            <CalendarMonthRoundedIcon />
            <Typography variant="body1" color="text.secondary" ml={1}>
              {position.role} · {position.company} · {position.duration}
            </Typography>
          </MotionBox>
          <Typography marginBottom={5}>
            {position.description}
          </Typography>
        </MotionBox>
      ))}
    </MotionBox>
  );
}

export default Career;
