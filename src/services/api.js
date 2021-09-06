import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://gj4gkccyyj.execute-api.us-east-2.amazonaws.com/Prod",
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
