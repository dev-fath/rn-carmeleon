import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig<unknown> = { baseURL: 'http://localhost:3000' };
const axiosClient = axios.create(axiosConfig);

axiosClient.interceptors.response.use(res => {
  return res.data as unknown;
});

axiosClient.interceptors.request.use(req => {
  return req;
});

export default axiosClient;
