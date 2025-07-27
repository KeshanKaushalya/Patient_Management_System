import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import billingService from '../../services/billingService';

export const fetchBilling = createAsyncThunk('billing/fetchAll', async (_, thunkAPI) => {
  try {
    return await billingService.getAll();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBilling.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBilling.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBilling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default billingSlice.reducer;
