import axiosClient from '@/network/apiClient.axios';

const deleteEvent = (id: string) => {
  return axiosClient.delete(`/events/${id}`);
};

const deleteRecent = (id: string) => {
  return axiosClient.delete(`/recent/${id}`);
};

const deleteService = (id: string) => {
  return axiosClient.delete(`/services/${id}`);
};

export { deleteEvent, deleteRecent, deleteService };
