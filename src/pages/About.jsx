import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <Container maxWidth="md" className="center-align">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About us
                </Typography>
                <Typography variant="h6" sx={{fontSize: '1.2rem'}} gutterBottom>
                    This website was developed and paid for completely by me. My goal is to give people an easy to use interface for checking whether food items and ingredients are safe for their dogs to eat or not. It's completely free to use, but if you would like to buy me a coffee, that helps tremendously with website upkeep and updating information and adding more functionality. Thanks everyone!
                </Typography>
                <button className="button" onClick={() => window.open('https://buymeacoffee.com/kasejohnson01', '_blank')}>
                    Buy me a coffee
                </button>
            </Box>
        </Container>
    );
};

export default About;