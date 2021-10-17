import useSWR from 'swr';
import { API_IS_AUTH } from '../constants/api-paths';
import { IUseUser } from '../interfaces';
import { fetcherAuth } from '../services/fetcher';

export default function useUser(): IUseUser {
  const { data, error } = useSWR(API_IS_AUTH, fetcherAuth);

  const isLoading = !data && !error;
  const isLogin = !isLoading && data && data.status === 'success';
  const _isError = !isLoading && data && data.status === 'error';

  return {
    data: isLogin ? data.data : null,
    isLoading,
    isError: Boolean(error || _isError),
  };
}
