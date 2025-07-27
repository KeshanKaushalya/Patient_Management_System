import api from './api';

const BILLING_API = '/api/billing';

export const billingService = {
  getAll: async () => {
    const response = await api.get(BILLING_API);
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`${BILLING_API}/${id}`);
    return response.data;
  },
  create: async (billing) => {
    const response = await api.post(BILLING_API, billing);
    return response.data;
  },
  update: async (id, billing) => {
    const response = await api.put(`${BILLING_API}/${id}`, billing);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`${BILLING_API}/${id}`);
    return response.data;
  },
};

export default billingService;
