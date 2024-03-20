/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/network/apiClient.axios';

const fetchReviews = async () => {
  try {
    const res = await axiosClient.get('/reviews');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch reviews');
  }
};

export const useReviews = () => {
  const {
    data: reviews,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => fetchReviews(),
  });

  return { reviews, isError, isLoading };
};
