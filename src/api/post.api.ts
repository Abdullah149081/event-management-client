import axiosClient from '@/network/apiClient.axios';

const postEvent = (value: any) => {
  return axiosClient.post(`/events`, value);
};

const postRecentEvent = (value: any) => {
  return axiosClient.post(`/recent`, value);
};

const postServices = (value: any) => {
  return axiosClient.post(`/services`, value);
};

export { postEvent, postRecentEvent, postServices };
