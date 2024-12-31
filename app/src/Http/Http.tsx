import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.104:3000/',
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
  token?: string,
): Promise<AxiosResponse<T>> => {
  if (token) {
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    return axiosInstance.post<T>(url, data, config);
  } else {
    return axiosInstance.post<T>(url, data);
  }
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
