/* eslint-disable import/prefer-default-export */
import axiosClient from '@/network/apiClient.axios';
import { useQuery } from '@tanstack/react-query';

const fetchPricing = async () => {
  try {
    const res = await axiosClient.get('/pricing');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch events');
  }
};

export const usePricing = () => {
  const {
    data: plans,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchPricing(),
  });

  return { plans, isError, isLoading };
};
