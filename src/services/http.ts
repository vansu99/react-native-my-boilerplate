import { API_CONFIG } from '../constants';
import { getToken } from '../utils/auth';
import axios, { AxiosInstance } from 'axios';
import { API_URI } from '@env';

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_URI,
      timeout: API_CONFIG.TIME_OUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.request.use(
      async (config) => {
        const token = await getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token as string}`;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;
export default http;
