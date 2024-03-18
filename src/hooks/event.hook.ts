/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/network/apiClient.axios';

const fetchEvents = async (limit: string) => {
  try {
    const url = limit ? `/events?limit=${limit}` : '/events';
    const res = await axiosClient.get(url);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch events');
  }
};

export const useEvents = (limit: string) => {
  const {
    data: eventData,
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['events', { allEvents: limit }],
    queryFn: () => fetchEvents(limit),
  });

  return { eventData, refetch, isError, isLoading };
};
