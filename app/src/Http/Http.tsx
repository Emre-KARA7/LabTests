import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.7.86.71:3000/',
  // use IPv4 address on dev
  // settings>wifi>hardware info>ipv4 address
});

export const get = async <T,>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, config);
};

export const post = async <T,>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, data, config);
};

export const put = async <T,>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.put<T>(url, data, config);
};

export const del = async <T,>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.delete<T>(url, config);
};
