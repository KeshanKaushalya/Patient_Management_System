import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBilling } from '../store/slices/billingSlice';
import { Box, Typography, CircularProgress, Alert, List, ListItem, ListItemText } from '@mui/material';

const BillingPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.billing);

  useEffect(() => {
    dispatch(fetchBilling());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" mb={2}>Billing</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {list.map((bill) => (
          <ListItem key={bill.id}>
            <ListItemText primary={`Patient: ${bill.patientName}`} secondary={`Amount: $${bill.amount}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BillingPage;
