import axiosClient from '@/network/apiClient.axios';

const postEvent = (value: any) => {
  return axiosClient.post(`/events`, value);
};

export { postEvent };
