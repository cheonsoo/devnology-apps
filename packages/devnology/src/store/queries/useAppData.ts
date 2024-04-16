import { useQuery } from '@tanstack/react-query';
import { fetchAppConfigs, fetchAppData } from '@/api/apps';
import { fetchPostData } from '@/api/post';
import { IApp } from '@/types';

export const useAppListQuery = () => {
  const appList = useQuery({
    queryKey: ['app-data'],
    // queryKey: ['app-data', { cacheTime: 1000 * 60 * 24 }],
    queryFn: fetchAppConfigs
  });

  console.log('### useAppListQuery');

  return { data: appList.data as IApp[], isLoading: appList.isLoading, isError: appList.isError, error: appList.error };
};

export const useAppInfoQuery = (id: string) => {
  const appInfo = useQuery({
    queryKey: ['app-info'],
    queryFn: () => fetchAppData(id)
  });

  console.log('### useAppInfoQuery');

  return { data: appInfo.data, isLoading: appInfo.isLoading, isError: appInfo.isError, error: appInfo.error };
};

export const usePostInfoQuery = (id: string) => {
  const appInfo = useQuery({
    queryKey: ['post-info'],
    queryFn: () => fetchPostData(id)
  });

  console.log('### usePostInfoQuery');

  return { data: appInfo.data, isLoading: appInfo.isLoading, isError: appInfo.isError, error: appInfo.error };
};
