import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';

const AboutPage = () => (
  <Container maxWidth="md" sx={{ mt: 6, background: '#fff', borderRadius: 4, boxShadow: 4, p: 4, border: '2px solid #bfa046' }}>
    <Box textAlign="center">
      <LocalHospitalIcon sx={{ fontSize: 60, color: '#bfa046' }} />
      <Typography variant="h3" sx={{ color: '#0a2e5c', fontWeight: 700, fontFamily: 'Montserrat, Arial, sans-serif' }} gutterBottom>About Us</Typography>
      <Typography variant="h6" color="#0a2e5c" mb={2}>
        Patient Management System is a modern healthcare platform designed to streamline patient records, billing, authentication, and analytics for clinics and hospitals.
      </Typography>
      <Typography color="#0a2e5c" mb={4}>
        Our mission is to empower healthcare providers with secure, efficient, and user-friendly tools for managing patient data, billing, and reporting. Built with a microservices architecture, our system ensures scalability, reliability, and data privacy.
      </Typography>
    </Box>
    <Divider sx={{ my: 4, bgcolor: '#bfa046' }} />
    <Box id="patients" mb={4}>
      <Box display="flex" alignItems="center" mb={1}>
        <GroupIcon sx={{ fontSize: 40, color: '#0a2e5c', mr: 1 }} />
        <Typography variant="h5" color="#0a2e5c" fontWeight={700}>Patient Management</Typography>
      </Box>
      <Typography color="#0a2e5c">
        Manage all patient records securely. Add, update, and view patient details, medical history, and contact information. Ensures data privacy and easy access for authorized staff.
      </Typography>
    </Box>
    <Box id="billing" mb={4}>
      <Box display="flex" alignItems="center" mb={1}>
        <ReceiptLongIcon sx={{ fontSize: 40, color: '#bfa046', mr: 1 }} />
        <Typography variant="h5" color="#bfa046" fontWeight={700}>Billing</Typography>
      </Box>
      <Typography color="#0a2e5c">
        Handle all billing operations, including invoice generation, payment tracking, and financial reporting. Integrates with patient records for seamless billing.
      </Typography>
    </Box>
    <Box id="analytics" mb={4}>
      <Box display="flex" alignItems="center" mb={1}>
        <AssessmentIcon sx={{ fontSize: 40, color: '#0a2e5c', mr: 1 }} />
        <Typography variant="h5" color="#0a2e5c" fontWeight={700}>Analytics</Typography>
      </Box>
      <Typography color="#0a2e5c">
        Access real-time analytics and reports on patient care, billing, and hospital performance. Make data-driven decisions to improve healthcare outcomes.
      </Typography>
    </Box>
    <Divider sx={{ my: 4, bgcolor: '#bfa046' }} />
    <Box textAlign="center">
      <Typography variant="body1" color="#0a2e5c">
        <b>Technology:</b> Java Spring Boot, PostgreSQL, gRPC, React, and Material UI. Secure, scalable, and modern.
      </Typography>
    </Box>
  </Container>
);

export default AboutPage;
