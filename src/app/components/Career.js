"use client";
import {Box, Typography, Icon} from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

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

function Career() {
    return (
        <Box
            component="section"
            display="flex"
            sx={{
                mb: 8,
                mt: 4,
                flexDirection: 'column',
            }}
        >
            <Typography marginBottom={4} variant="h4" gutterBottom>
                Career
            </Typography>
            {careerData.map((position, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', sm: 'row',},
                            justifyContent: {xs: 'center', sm: 'space-between'},
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flex: 1,
                            }}
                        >
                            <CalendarMonthRoundedIcon/>
                            <Typography variant="body1" color="text.secondary">
                                {"\u00A0" + position.duration}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                color: 'text.secondary',
                                mb: 2,
                            }}
                            >
                                <Typography>{position.role + "\u00A0"}</Typography>
                                <Typography> · </Typography>
                                <Typography> {"\u00A0" + position.company}</Typography>
                            </Box>
                            <Typography marginBottom={5}>
                                {position.description}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    );
}

export default Career;
