
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/lovable-uploads/3687a8c1-9cb2-42f1-bdea-de50ec10c79b.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Premium Chauffeur Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 300,
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Experience luxury transportation with our professional chauffeur service. 
              Safe, reliable, and comfortable rides for every occasion.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            {/* Space for additional content or image */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
