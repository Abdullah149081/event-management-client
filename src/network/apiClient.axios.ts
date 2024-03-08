import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import config from '@/config';

// Create Axios instance with base configuration
const axiosClient: AxiosInstance = axios.create({
  baseURL: config.URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Handle Error response from API request and log it to console for debugging purposes.
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const res = error.response;
    console.error(
      `Looks like there was a problem. Status Code: ${res?.status}`
    );
    return Promise.reject(error);
  }
);

export default axiosClient;
