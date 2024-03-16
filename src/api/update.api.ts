import axiosClient from '@/network/apiClient.axios';

const updateEvent = (id: string, values: any) => {
  return axiosClient.put(`/events/${id}`, values);
};

export { updateEvent };
