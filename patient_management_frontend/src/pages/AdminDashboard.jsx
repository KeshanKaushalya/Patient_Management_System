import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, AppBar, Toolbar, Link as MuiLink, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const adminFeatures = [
  {
    title: 'Manage Patients',
    description: 'View, add, edit, and delete patient records.',
    icon: <GroupIcon sx={{ fontSize: 50, color: '#0a2e5c' }} />, 
    link: '/app/patients',
  },
  {
    title: 'Manage Billing',
    description: 'View and manage billing, invoices, and payments.',
    icon: <ReceiptLongIcon sx={{ fontSize: 50, color: '#bfa046' }} />, 
    link: '/app/billing',
  },
  {
    title: 'View Analytics',
    description: 'Access analytics and reports for the hospital.',
    icon: <AssessmentIcon sx={{ fontSize: 50, color: '#0a2e5c' }} />, 
    link: '/app/analytics',
  },
  {
    title: 'User Management',
    description: 'Manage user accounts and roles.',
    icon: <LocalHospitalIcon sx={{ fontSize: 50, color: '#bfa046' }} />, 
    link: '/admin/users',
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Only allow admin
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN') navigate('/login');
  }, [navigate]);

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <AppBar position="static" sx={{ background: '#0a2e5c' }}>
        <Toolbar>
          <LocalHospitalIcon sx={{ fontSize: 32, color: '#bfa046', mr: 1 }} />
          <Typography variant="h6" color="#fff" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            navigate('/login');
          }}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" color="#0a2e5c" fontWeight={700} mb={4}>
          Welcome, Admin
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {adminFeatures.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card sx={{ minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3, border: '2px solid #bfa046', background: '#fff' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  {feature.icon}
                  <Typography variant="h6" mt={2} mb={1} color="#0a2e5c">{feature.title}</Typography>
                  <Typography color="text.secondary">{feature.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', mb: 1 }}>
                  <Button variant="contained" sx={{ background: '#bfa046', color: '#fff', fontWeight: 700 }} onClick={() => navigate(feature.link)}>
                    Go
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
