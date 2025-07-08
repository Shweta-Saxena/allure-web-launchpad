
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Speed,
  Security,
  Devices,
  Support,
  CloudDone,
  TrendingUp,
} from '@mui/icons-material';

const features = [
  {
    icon: <Speed />,
    title: 'Lightning Fast',
    description: 'Optimized performance with cutting-edge technology for blazing fast load times.',
  },
  {
    icon: <Security />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
  },
  {
    icon: <Devices />,
    title: 'Responsive Design',
    description: 'Perfect experience across all devices - desktop, tablet, and mobile.',
  },
  {
    icon: <Support />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to help you whenever you need assistance.',
  },
  {
    icon: <CloudDone />,
    title: 'Cloud Integration',
    description: 'Seamless cloud integration for scalability and data synchronization.',
  },
  {
    icon: <TrendingUp />,
    title: 'Analytics & Insights',
    description: 'Powerful analytics to track performance and gain valuable insights.',
  },
];

const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            We provide exceptional features that make your digital journey smooth and successful
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'white',
                  border: '1px solid #f0f0f0',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'white',
                    }}
                  >
                    {React.cloneElement(feature.icon, { fontSize: 'large' })}
                  </Box>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
