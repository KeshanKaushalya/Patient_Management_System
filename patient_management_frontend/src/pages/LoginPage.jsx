import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/authSlice';
import { Box, Button, TextField, Typography, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const roles = [
  { value: 'USER', label: 'User' },
  { value: 'ADMIN', label: 'Admin' },
];

const ADMIN_EMAIL = 'madusankakeshan782@gmail';
const ADMIN_PASSWORD = 'Keshan@321';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [role, setRole] = React.useState('USER');
  const [adminError, setAdminError] = React.useState(null);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setAdminError(null);
      if (role === 'ADMIN') {
        if (values.username === ADMIN_EMAIL && values.password === ADMIN_PASSWORD) {
          // Simulate admin login
          localStorage.setItem('token', 'admin-token');
          localStorage.setItem('role', 'ADMIN');
          navigate('/admin');
          return;
        } else {
          setAdminError('Invalid admin credentials');
          return;
        }
      }
      const result = await dispatch(login(values));
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    },
  });

  return (
    <Box maxWidth={400} mx="auto" mt={8} sx={{ background: '#fff', borderRadius: 3, boxShadow: 4, p: 4, border: '2px solid #0a2e5c' }}>
      <Typography variant="h5" mb={2} sx={{ color: '#0a2e5c', fontWeight: 700 }}>Login</Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            label="Role"
            onChange={e => setRole(e.target.value)}
          >
            {roles.map(r => <MenuItem key={r.value} value={r.value}>{r.label}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {adminError && <Alert severity="error">{adminError}</Alert>}
        {error && <Alert severity="error">{error.message || 'Login failed'}</Alert>}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, background: '#0a2e5c', color: '#fff', fontWeight: 700, '&:hover': { background: '#bfa046' } }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <Button color="secondary" fullWidth sx={{ mt: 2, color: '#0a2e5c', fontWeight: 700 }} onClick={() => navigate('/register')}>
        Don&apos;t have an account? Register
      </Button>
    </Box>
  );
};

export default LoginPage;
