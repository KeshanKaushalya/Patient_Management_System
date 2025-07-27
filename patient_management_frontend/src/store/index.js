import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import patientReducer from './slices/patientSlice';
import billingReducer from './slices/billingSlice';
import analyticsReducer from './slices/analyticsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientReducer,
    billing: billingReducer,
    analytics: analyticsReducer,
  },
});

export default store;
