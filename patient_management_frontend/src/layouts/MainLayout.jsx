import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Patients', to: '/app/patients' },
  { label: 'Billing', to: '/app/billing' },
  { label: 'Analytics', to: '/app/analytics' },
  { label: 'Admin Dashboard', to: '/admin' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
  { label: 'Logout', to: '/logout' },
];

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      {/* Nawaloka-style Navigation Bar */}
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #0a2e5c 60%, #bfa046 100%)', boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 72 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocalHospitalIcon sx={{ fontSize: 40, color: '#bfa046', mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', letterSpacing: 1, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Patient Management System
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map(link => (
              <Button
                key={link.to}
                color="inherit"
                component={Link}
                to={link.to}
                sx={{
                  color: location.pathname === link.to ? '#bfa046' : '#fff',
                  fontWeight: 500,
                  fontSize: 16,
                  borderBottom: location.pathname === link.to ? '2px solid #bfa046' : 'none',
                  borderRadius: 0,
                  px: 2,
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  '&:hover': {
                    color: '#bfa046',
                    background: 'rgba(10,46,92,0.08)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: { xs: 1, md: 3 }, minHeight: '80vh', background: '#f9f9f9' }}>
        <Outlet />
      </Box>
      {/* Nawaloka-style Footer, system-appropriate */}
      <footer style={{ background: 'linear-gradient(90deg, #0a2e5c 60%, #bfa046 100%)', color: 'white', marginTop: 'auto', width: '100%', paddingTop: 32, paddingBottom: 16 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Brand & Description */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <LocalHospitalIcon sx={{ fontSize: 36, color: '#bfa046' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  Patient Management System
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}>
                Modern healthcare platform for patient, billing, and analytics management. Secure, reliable, and inspired by Nawaloka Hospital's excellence.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/keshankaushalya/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'white', '&:hover': { color: '#bfa046', background: 'rgba(255,255,255,0.08)' } }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/KeshanKaushalya"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'white', '&:hover': { color: '#bfa046', background: 'rgba(255,255,255,0.08)' } }}
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://wa.me/94760160321"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'white', '&:hover': { color: '#bfa046', background: 'rgba(255,255,255,0.08)' } }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Grid>
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button component={Link} to="/" sx={footerLinkStyle}>Home</Button>
                <Button component={Link} to="/about" sx={footerLinkStyle}>About</Button>
                <Button component={Link} to="/contact" sx={footerLinkStyle}>Contact</Button>
                <Button component={Link} to="/login" sx={footerLinkStyle}>Login</Button>
                <Button component={Link} to="/register" sx={footerLinkStyle}>Register</Button>
              </Box>
            </Grid>
            {/* Features */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button component={Link} to="/app/patients" sx={footerLinkStyle}>Patients</Button>
                <Button component={Link} to="/app/billing" sx={footerLinkStyle}>Billing</Button>
                <Button component={Link} to="/app/analytics" sx={footerLinkStyle}>Analytics</Button>
                <Button component={Link} to="/admin" sx={footerLinkStyle}>Admin Dashboard</Button>
              </Box>
            </Grid>
            {/* Contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                Email: madusankakeshan782@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                WhatsApp: +94 76 016 0321
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                LinkedIn: <a href="https://www.linkedin.com/in/keshankaushalya/" target="_blank" rel="noopener" style={{ color: '#bfa046', textDecoration: 'underline' }}>KeshanKaushalya</a>
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2, pb: 1 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
              © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/keshankaushalya/" target="_blank" rel="noopener" style={{ color: '#bfa046', textDecoration: 'underline' }}>KeshanKaushalya</a>. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
              Inspired by Nawaloka Hospital | Patient Management System
            </Typography>
          </Box>
        </Container>
      </footer>
    </>
  );
};

const footerLinkStyle = {
  color: '#fff',
  justifyContent: 'flex-start',
  fontWeight: 400,
  fontSize: 15,
  textTransform: 'none',
  px: 0,
  py: 0.5,
  minWidth: 0,
  fontFamily: 'Montserrat, Arial, sans-serif',
  '&:hover': {
    color: '#bfa046',
    background: 'rgba(10,46,92,0.08)',
  },
};

export default MainLayout;
