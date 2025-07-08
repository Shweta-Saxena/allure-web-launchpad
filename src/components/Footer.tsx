
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Link,
  IconButton,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              YourBrand
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.9 }}>
              We create amazing digital solutions that help businesses grow and succeed in the modern world.
            </Typography>
            <Box>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Web Development
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Mobile Apps
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                UI/UX Design
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Consulting
              </Link>
            </Box>
          </Grid>

          <Grid xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                About Us
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Careers
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Blog
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Typography sx={{ mb: 1, opacity: 0.9 }}>
              📍 123 Business Street, Suite 100, New York, NY 10001
            </Typography>
            <Typography sx={{ mb: 1, opacity: 0.9 }}>
              📞 +1 (555) 123-4567
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              ✉️ contact@yourbrand.com
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography sx={{ opacity: 0.8 }}>
            © 2024 YourBrand. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
