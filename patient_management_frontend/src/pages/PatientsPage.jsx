import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../store/slices/patientSlice';
import { Box, Typography, CircularProgress, Alert, List, ListItem, ListItemText, Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

const PatientsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <GroupIcon sx={{ fontSize: 40, color: '#1976d2', mr: 1 }} />
        <Typography variant="h4" color="primary">Patients</Typography>
        <Button sx={{ ml: 'auto' }} variant="outlined" onClick={() => navigate('/')}>Home</Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {list.map((patient) => (
          <ListItem key={patient.id} sx={{ borderBottom: '1px solid #eee' }}>
            <ListItemText primary={patient.name} secondary={patient.email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PatientsPage;
