import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalytics } from '../store/slices/analyticsSlice';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const { overview, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" mb={2}>Analytics Overview</Typography>
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
