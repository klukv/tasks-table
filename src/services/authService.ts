import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../utils/const";


const token = localStorage.getItem('token');

//создание базового url для запросов без заголовка с токеном
const $host = axios.create({
  baseURL: API_URL,
});

//создание базового url для запросов с токеном
const $authHost = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config:AxiosRequestConfig) => {
    if(config.headers){
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  }
  
  $authHost.interceptors.request.use(authInterceptor);
  
  export {
    $host,
    $authHost
  }
