import { getRequest } from './apiService';

export const getProjects = (userId: string) => getRequest(`/${userId}/projects`);
