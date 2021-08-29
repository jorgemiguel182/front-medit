import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://9flfzc9e5g.execute-api.us-east-2.amazonaws.com/Prod"
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;