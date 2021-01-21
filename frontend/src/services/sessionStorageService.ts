import { IUser } from '../interfaces';

export const saveUserToStorage = (user: IUser) => {
  sessionStorage.setItem('loginedUser', JSON.stringify(user));
};

export const getUserFromStorage = () => {
  return JSON.parse(sessionStorage.getItem('loginedUser') as string);
};

export const isCurrentUser = (id?: string) => {
  const user = getUserFromStorage();
  return user?._id === id;
};

export const clearStorage = () => {
  sessionStorage.clear();
};