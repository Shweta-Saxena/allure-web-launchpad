
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default Index;
