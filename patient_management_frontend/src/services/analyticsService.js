import api from './api';

const ANALYTICS_API = '/api/analytics';

export const analyticsService = {
  getOverview: async () => {
    const response = await api.get(`${ANALYTICS_API}/overview`);
    return response.data;
  },
  getPatientStats: async () => {
    const response = await api.get(`${ANALYTICS_API}/patients`);
    return response.data;
  },
  getBillingStats: async () => {
    const response = await api.get(`${ANALYTICS_API}/billing`);
    return response.data;
  },
};

export default analyticsService;
