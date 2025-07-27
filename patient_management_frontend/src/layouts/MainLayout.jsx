import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const MainLayout = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Patient Management System
        </Typography>
        <Button color="inherit" component={Link} to="/patients">Patients</Button>
        <Button color="inherit" component={Link} to="/billing">Billing</Button>
        <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        <Button color="inherit" component={Link} to="/logout">Logout</Button>
      </Toolbar>
    </AppBar>
    <Box sx={{ p: 3 }}>
      <Outlet />
    </Box>
  </>
);

export default MainLayout;
