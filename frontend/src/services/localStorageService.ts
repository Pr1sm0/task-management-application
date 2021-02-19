import { IUser } from '../interfaces';

export const saveUserToStorage = (user: IUser) => {
  localStorage.setItem('loginedUser', JSON.stringify(user));
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('loginedUser') as string);
};

export const isCurrentUser = (id?: string) => {
  const user = getUserFromStorage();
  return user?._id === id;
};

export const clearStorage = () => {
  localStorage.clear();
};