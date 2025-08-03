import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => (
  <Container maxWidth="sm" sx={{ mt: 6 }}>
    <Box textAlign="center">
      <EmailIcon sx={{ fontSize: 60, color: '#1976d2' }} />
      <Typography variant="h3" color="primary" gutterBottom>Contact Us</Typography>
      <Typography variant="h6" color="text.secondary" mb={2}>
        For inquiries, support, or feedback, please reach out:
      </Typography>
      <Typography>
        Email: <Link href="mailto:support@healthcare.com">support@healthcare.com</Link>
      </Typography>
      <Typography mt={2}>
        GitHub: <Link href="https://github.com/pubudusanka/patient-management-system" target="_blank">Project Repository</Link>
      </Typography>
    </Box>
  </Container>
);

export default ContactPage;
