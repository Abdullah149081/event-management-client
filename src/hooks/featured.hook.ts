/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/network/apiClient.axios';

const fetchFeatured = async () => {
  try {
    const res = await axiosClient.get('/featured');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch featured');
  }
};

export const useFeatured = () => {
  const {
    data: featured,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['featured'],
    queryFn: () => fetchFeatured(),
  });

  return { featured, isError, isLoading };
};
