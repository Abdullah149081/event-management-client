/* eslint-disable import/prefer-default-export */

import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/network/apiClient.axios';

const fetchRecent = async (limit: string) => {
  try {
    const url = limit ? `/recent?limit=${limit}` : '/recent';
    const res = await axiosClient.get(url);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch Recent Event');
  }
};

export const useRecent = (limit: string) => {
  const {
    data: recentData,
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['recent', { allRecent: limit }],
    queryFn: () => fetchRecent(limit),
  });

  return { recentData, refetch, isError, isLoading };
};
