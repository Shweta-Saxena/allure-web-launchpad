
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>
        
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Us
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. 
          Our mission is to help businesses succeed in the digital world through innovative solutions and cutting-edge technology.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default About;
