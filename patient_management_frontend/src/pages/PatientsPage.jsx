import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../store/slices/patientSlice';
import { Box, Typography, CircularProgress, Alert, List, ListItem, ListItemText } from '@mui/material';

const PatientsPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" mb={2}>Patients</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {list.map((patient) => (
          <ListItem key={patient.id}>
            <ListItemText primary={patient.name} secondary={patient.email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PatientsPage;
