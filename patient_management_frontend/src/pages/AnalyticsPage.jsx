import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalytics } from '../store/slices/analyticsSlice';
import { Box, Typography, CircularProgress, Alert, Button } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useNavigate } from 'react-router-dom';

const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { overview, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <AssessmentIcon sx={{ fontSize: 40, color: '#fbc02d', mr: 1 }} />
        <Typography variant="h4" color="primary">Analytics Overview</Typography>
        <Button sx={{ ml: 'auto' }} variant="outlined" onClick={() => navigate('/')}>Home</Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {overview && (
        <Box>
          <Typography>Total Patients: {overview.totalPatients}</Typography>
          <Typography>Total Billing: ${overview.totalBilling}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AnalyticsPage;
