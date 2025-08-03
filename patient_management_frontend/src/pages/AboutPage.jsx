import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const AboutPage = () => (
  <Container maxWidth="md" sx={{ mt: 6 }}>
    <Box textAlign="center">
      <LocalHospitalIcon sx={{ fontSize: 60, color: '#1976d2' }} />
      <Typography variant="h3" color="primary" gutterBottom>About Us</Typography>
      <Typography variant="h6" color="text.secondary" mb={2}>
        Patient Management System is a modern healthcare platform designed to streamline patient records, billing, authentication, and analytics for clinics and hospitals.
      </Typography>
      <Typography>
        Our mission is to empower healthcare providers with secure, efficient, and user-friendly tools for managing patient data, billing, and reporting. Built with a microservices architecture, our system ensures scalability, reliability, and data privacy.
      </Typography>
    </Box>
  </Container>
);

export default AboutPage;
