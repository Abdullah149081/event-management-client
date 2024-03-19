/* eslint-disable import/prefer-default-export */

import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/network/apiClient.axios';

const fetchServices = async (limit: string) => {
  try {
    const url = limit ? `/services?limit=${limit}` : '/services';
    const res = await axiosClient.get(url);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch Services Event');
  }
};

export const useServices = (limit: string) => {
  const {
    data: servicesData,
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['services', { allServices: limit }],
    queryFn: () => fetchServices(limit),
  });

  return { servicesData, refetch, isError, isLoading };
};
