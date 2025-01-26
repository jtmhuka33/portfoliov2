"use client";

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const skills = ['JavaScript', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Docker'];

function Skills() {
  return (
    <Box component="section" sx={{ mb: 8, position: 'relative' }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 4,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              padding: '20px 30px',
              textAlign: 'center',
            }}
          >
            {skill}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;