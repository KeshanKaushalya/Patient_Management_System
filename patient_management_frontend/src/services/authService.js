import api from './api';

const AUTH_API = '/api/auth';

export const authService = {
  login: async (credentials) => {
    const response = await api.post(`${AUTH_API}/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  validateToken: async () => {
    const response = await api.post(`${AUTH_API}/validate`);
    return response.data;
  },

  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(atob(token.split('.')[1])) : null;
  },
};

export default authService;
