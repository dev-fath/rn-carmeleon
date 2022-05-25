import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig<unknown> = { baseURL: 'http://localhost:3000' };
const client = axios.create(axiosConfig);

client.interceptors.response.use(res => {
  return res.data as unknown;
});

client.interceptors.request.use(req => {
  return req;
});
