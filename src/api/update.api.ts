import axiosClient from '@/network/apiClient.axios';

const updateEvent = (id: string, values: any) => {
  return axiosClient.put(`/events/${id}`, values);
};

const updateRecent = (id: string, values: any) => {
  return axiosClient.put(`/recent/${id}`, values);
};

const updateService = (id: string, values: any) => {
  return axiosClient.put(`/services/${id}`, values);
};

export { updateEvent, updateRecent, updateService };
