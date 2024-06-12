import { IApp } from '@/types';
import { getData } from '@/api';

export const fetchAppConfigs = async () => {
  console.log('### fetchAppConfigs');
  const url: string = `http://static.devnology.co.kr/files/config/apps.json`;
  // const url: string = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/apps.json`;
  console.log(url);
  const data = await getData<IApp[]>(url);
  return data || [];
};

export const fetchAppData = async (id: string) => {
  const apps = await fetchAppConfigs();
  const app = apps.find((app) => app.id === id);
  return app || ({} as IApp);
};

export const fetchPostData = async (id: string) => {
  const apps = await fetchAppConfigs();
  const app = apps.find((app) => app.id === id);
  return app || ({} as IApp);
};
