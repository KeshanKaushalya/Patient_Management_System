import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import analyticsService from '../../services/analyticsService';

export const fetchAnalytics = createAsyncThunk('analytics/fetchOverview', async (_, thunkAPI) => {
  try {
    return await analyticsService.getOverview();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    overview: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default analyticsSlice.reducer;
