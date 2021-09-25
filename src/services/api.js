import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
// api.interceptors.request.use(async config => {
//   const token = localStorage.getItem('access_token');

//   if (token) {
//     config.headers.Authorization = `${token}`;
//   }
//   return config;
// });

export default api;
