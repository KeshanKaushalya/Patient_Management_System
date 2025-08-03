import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, AppBar, Toolbar, Link as MuiLink, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useSelector } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedbackIcon from '@mui/icons-material/Feedback';

const features = [
  {
    title: 'Patient Management',
    description: 'View, add, and manage patient records. Securely store and update patient information.',
    icon: <GroupIcon sx={{ fontSize: 50, color: '#1976d2' }} />, 
    link: '/app/patients',
    clipart: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/medical-2025670_1280.png',
    more: '/about#patients',
  },
  {
    title: 'Billing',
    description: 'Manage billing, invoices, and payments. Track financials and automate billing tasks.',
    icon: <ReceiptLongIcon sx={{ fontSize: 50, color: '#388e3c' }} />, 
    link: '/app/billing',
    clipart: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/medical-2025671_1280.png',
    more: '/about#billing',
  },
  {
    title: 'Analytics',
    description: 'View analytics and reports. Get insights into patient care and billing trends.',
    icon: <AssessmentIcon sx={{ fontSize: 50, color: '#fbc02d' }} />, 
    link: '/app/analytics',
    clipart: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/medical-2025672_1280.png',
    more: '/about#analytics',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <LocalHospitalIcon sx={{ fontSize: 32, color: '#1976d2', mr: 1 }} />
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Patient Management System
          </Typography>
          <MuiLink color="inherit" underline="none" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => navigate('/')}>Home</MuiLink>
          <MuiLink color="inherit" underline="none" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => navigate('/about')}><InfoIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />About</MuiLink>
          <MuiLink color="inherit" underline="none" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => navigate('/contact')}><ContactPageIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />Contact</MuiLink>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 6 }}>
        <Box sx={{
          maxWidth: 1000,
          mx: 'fit',
          mb: 6,
          p: 20,
          borderRadius: 4,
          boxShadow: 4,
          background: '#fff',
          transform: 'scale(1.08)',
        }}>
          <Typography variant="h3" align="center" gutterBottom color="primary">
            <LocalHospitalIcon sx={{ fontSize: 60, verticalAlign: 'middle', color: '#1976d2' }} />
            Patient Management System
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" mb={4}>
            Welcome to your healthcare dashboard. {token ? 'Select a feature to get started.' : 'Please log in or register to access features.'}
          </Typography>
          {!token ? (
            <Box display="flex" justifyContent="center" gap={2} mt={4}>
              <Button variant="contained" color="primary" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="outlined" color="primary" onClick={() => navigate('/register')}>Register</Button>
            </Box>
          ) : null}
        </Box>
        <Box sx={{ overflowX: 'auto', mt: 6 }}>
          <Grid container spacing={4} justifyContent="center" sx={{ minWidth: 900 }}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <Card sx={{ minHeight: 400, maxWidth: 370, width: 370, m: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3 }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    {feature.icon}
                    <Typography variant="h5" mt={2} mb={1}>{feature.title}</Typography>
                    <Typography color="text.secondary" mb={2}>{feature.description}</Typography>
                    <Box display="flex" justifyContent="center" mb={2}>
                      <img src={feature.clipart} alt={feature.title + ' clipart'} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', mb: 1 }}>
                    <Button variant="contained" color="primary" onClick={() => navigate(feature.link)}>
                      Go to {feature.title}
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate(feature.more)}>
                      More Info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={8} textAlign="center">
          <Typography variant="body1" color="text.secondary">
            <b>Backend Features:</b> Microservices for Patient Management, Billing, Authentication, and Analytics. Built with Java Spring Boot, PostgreSQL, and gRPC for secure, scalable healthcare data management.
          </Typography>
        </Box>
      </Container>
      <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 3, mt: 4 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <GitHubIcon sx={{ color: '#333' }} />
            <MuiLink href="https://github.com/KeshanKaushalya" target="_blank" color="inherit" underline="hover">
                KeshanKaushalya
            </MuiLink>
          </Box>
          <Box display="flex" gap={2} mt={{ xs: 2, md: 0 }}>
            <Button color="primary" onClick={() => navigate('/')}>Home</Button>
            <Button color="primary" onClick={() => navigate('/about')}>About</Button>
            <Button color="primary" onClick={() => navigate('/contact')}>Contact</Button>
            <Button color="secondary" startIcon={<FeedbackIcon />} onClick={() => navigate('/contact#feedback')}>Feedback</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
