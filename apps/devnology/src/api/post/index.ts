import { getData } from '@/api';
import { fetchAppConfigs } from '@/api/apps';

export const fetchPostData = async (id: string): Promise<string> => {
  const apps = await fetchAppConfigs();
  const app = apps.find((app) => app.id === id);

  const content = await getData('http://static.devnology.co.kr/posts' + (app ? app.path : ''));
  return content as string;
};
