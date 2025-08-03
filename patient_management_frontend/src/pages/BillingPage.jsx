import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBilling } from '../store/slices/billingSlice';
import { Box, Typography, CircularProgress, Alert, List, ListItem, ListItemText, Button } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.billing);

  useEffect(() => {
    dispatch(fetchBilling());
  }, [dispatch]);

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <ReceiptLongIcon sx={{ fontSize: 40, color: '#388e3c', mr: 1 }} />
        <Typography variant="h4" color="primary">Billing</Typography>
        <Button sx={{ ml: 'auto' }} variant="outlined" onClick={() => navigate('/')}>Home</Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {list.map((bill) => (
          <ListItem key={bill.id} sx={{ borderBottom: '1px solid #eee' }}>
            <ListItemText primary={`Patient: ${bill.patientName}`} secondary={`Amount: $${bill.amount}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BillingPage;
