import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig<unknown> = { baseURL: 'https://api.carmeleon.co.kr/api/' };
const axiosClient = axios.create(axiosConfig);

axiosClient.interceptors.response.use(res => {
  return res.data as unknown;
});

axiosClient.interceptors.request.use(req => {
  if (req.headers) {
    req.headers.ak = 'development';
  }
  return req;
});

export default axiosClient;
