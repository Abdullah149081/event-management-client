import axiosClient from '@/network/apiClient.axios';

const postEvent = (value: any) => {
  return axiosClient.post(`/events`, value);
};

const recentEvent = (value: any) => {
  return axiosClient.post(`/recent`, value);
};

export { postEvent, recentEvent };
