
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/lovable-uploads/3687a8c1-9cb2-42f1-bdea-de50ec10c79b.png"
              alt="Oxford Global Chauffeur"
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 3,
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: '#333',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Be unique with
              <br />
              <Box component="span" sx={{ fontWeight: 700 }}>
                Oxford Global
              </Box>
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              Our purpose goes beyond transportation. We craft experiences that evoke emotion, build
              memories, and create lasting impressions. Every journey with Oxford Global is designed
              to be exceptional, reflecting our commitment to luxury, comfort, and unparalleled service.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              From airport transfers to special occasions, our professional chauffeurs ensure every
              mile is a testament to our dedication to excellence.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
