import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.headers = { 'Content-Type': 'application/json' };

export const getRequest = (url: string) => axios.get(`${url}`).then(res => res.data);

export const postRequest = (url: string, body: any) => {
  return axios
    .post(`${url}`, body)
    .then(res => res.data)
    .catch(e => e);
};
