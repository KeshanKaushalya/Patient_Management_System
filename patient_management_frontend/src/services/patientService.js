import api from './api';

const PATIENT_API = '/api/patients';

export const patientService = {
  getAll: async () => {
    const response = await api.get(PATIENT_API);
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`${PATIENT_API}/${id}`);
    return response.data;
  },
  create: async (patient) => {
    const response = await api.post(PATIENT_API, patient);
    return response.data;
  },
  update: async (id, patient) => {
    const response = await api.put(`${PATIENT_API}/${id}`, patient);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`${PATIENT_API}/${id}`);
    return response.data;
  },
};

export default patientService;
